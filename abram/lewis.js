const canvas = document.getElementById("testCanvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 1000;
const CANVAS_HEIGHT = canvas.height = 600;

const bondingDistance = 80;

canvas.addEventListener("mousemove", e => {

    console.log("X " + e.x)
    console.log("Y " + e.y)

    mouseX = e.x - canvas.getBoundingClientRect().x;
    mouseY = e.y - canvas.getBoundingClientRect().y;
})
canvas.addEventListener("mousedown", e => {
    for(var atom of atoms) {
        if(atom.pointIn(mouseX, mouseY)) {
            atom.selected = true;
            break; //makes sure no more than one atom is selected at the same time.
        }
    }
})
canvas.addEventListener("mouseup", e => {
    for(var atom of atoms) {
        if(atom.selected) {
            atom.selected = false;
        }
    }
})

class Atom {
    constructor(type, numValence) {
        this.type = type;
        this.numValence = numValence;
        this.bonds = [];
        this.numAtomsBondedWith = 0;
        this.x = 0;
        this.y = 0;
        this.radius = 20;
        this.selected = false;

        if(this.type == "H" || this.type == "He"){
            this.shellMax = 2;
        } else {
            this.shellMax = 8;
        }
    }

    update() {
        if(this.selected) {
            this.x = mouseX;
            this.y = mouseY;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = '#FF0000';
        ctx.fill();

        ctx.fillStyle = "Black";
        ctx.font = "18px serif";
        ctx.textAlign = "center";
        ctx.fillText(this.type, this.x, this.y + this.radius / 3);
    }

    drawBonds(ctx) {
        const distanceBetweenBonds = 10;
        for(let i = 1; i < this.bonds.length; i++){
            var sameAtomBonds = 1;
            while(this.bonds[i + 1] == this.bonds[i]) {
                sameAtomBonds++;
                i++;
            }
            this.numAtomsBondedWith++;

            const startDistance = distanceBetweenBonds * sameAtomBonds / 2;

            //console.log("Start Distance: " + startDistance);

            //ctx.beginPath();
            //ctx.moveTo(this.x, this.y);
            //ctx.lineTo(this.bonds[i].x, this.bonds[i].y);
            //ctx.stroke();

            var lineWidth = this.bonds[i].x - this.x;
            var lineHeight = this.bonds[i].y - this.y;
            var lineAngle = Math.atan(lineHeight / lineWidth);
            var offsetAngle = Math.PI / 2 + lineAngle;

            for(let j = 0; j < sameAtomBonds; j++){
                ctx.beginPath();
                /*var startX = this.x + (Math.sin(Math.PI / 2) * (startDistance - j));
                var startY = this.y + (Math.cos(Math.PI / 2) * (startDistance - j));
                var endX = this.bonds[i].x + (Math.sin(Math.PI / 2) * (startDistance - j));
                var endY = this.bonds[i].y + (Math.cos(Math.PI / 2) * (startDistance - j));*/

                var offsetX = Math.cos(offsetAngle) + startDistance - j * distanceBetweenBonds;
                var offsetY = Math.sin(offsetAngle) + startDistance - j * distanceBetweenBonds;

                var startX = this.x + offsetX;
                var startY = this.y + offsetY;
                var endX = this.bonds[i].x + offsetX;
                var endY = this.bonds[i].y + offsetY;

                //console.log(startX + "," + startY + " : " + endX + "," + endY);

                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.stroke();
            }

            i++;
        }
    }

    drawSingleValence(angle) {
        var valenceX = this.x + Math.cos(angle) * (this.radius + 5);
        var valenceY = this.y + Math.sin(angle) * (this.radius + 5);

        ctx.beginPath();
        ctx.arc(valenceX, valenceY, 5, 0, 2 * Math.PI, false);
        ctx.fillStyle = '#FF0000';
        ctx.fill();
    }

    drawValence(ctx) {
        var positions = [0,0,0,0];
        var positionIndex = 0;
        for(var i = 0; i < this.numValence - this.bonds.length; i++) {
            positions[positionIndex]++;
            if(positionIndex == 3) {
                positionIndex = 0;
            } else {
                positionIndex++;
            }
        }

        var spacingAngle = Math.PI * 2 / positions.length;
        for(var i = 0; i < positions.length; i++) {
            var currentAngle = i * spacingAngle;
            if(positions[i] == 1) {
                this.drawSingleValence(currentAngle);
            } else if(positions[i] == 2) {
                this.drawSingleValence(currentAngle - Math.PI / 10);
                this.drawSingleValence(currentAngle + Math.PI / 10);
            }
        }
    }

    pointIn(x, y){
        if(x >= this.x - this.radius && x <= this.x + this.radius && y >= this.y - this.radius && y <= this.y + this.radius) {
            return true;
        }
        return false;
    }
}

function checkForBonds(atoms) {
    //clears the bond list
    for(var atom of atoms) {
        atom.bonds = [];
    }
    for(let i = 0; i < atoms.length; i++) {
        for(let j = 0; j < atoms.length; j++) {
            if(i != j) {
                //if the distance to the other atom is less than bondingDistance
                if(Math.abs(Math.sqrt((atoms[j].x - atoms[i].x) * (atoms[j].x - atoms[i].x) + (atoms[j].y - atoms[i].y) * (atoms[j].y - atoms[i].y))) <= bondingDistance ) {
                    //TODO make sure no more than three bonds are made.
                    while(atoms[i].numValence + atoms[i].bonds.length < atoms[i].shellMax && atoms[j].numValence + atoms[j].bonds.length < atoms[j].shellMax) {
                        atoms[i].bonds.push(atoms[j]);
                        atoms[j].bonds.push(atoms[i]);
                    }
                }
            }
        }
    }
}

var atoms =[];// [new Atom("Na", 1), new Atom("Na", 1), new Atom("O", 6), new Atom("N", 5), new Atom("He", 2), new Atom("N", 5), new Atom("H", 1), new Atom("H", 1), new Atom("Cl", 7)];

/*atoms[0].x = 40;
atoms[0].y = 40;
atoms[1].x = 60;
atoms[1].y = 40;
atoms[2].x = 80;
atoms[2].y = 40;
atoms[3].x = 40;
atoms[3].y = 60;
atoms[4].x = 70;
atoms[4].y = 60;*/

function addAtom(type, valence) {
    atom = new Atom(type, valence);
    atom.x = 40;
    atom.y = 40;
    atoms.push(atom);
}

function loop() {
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.font = '12px serif';

    checkForBonds(atoms)

    for(var atom of atoms) {
        atom.update();
        atom.drawBonds(ctx);
    }
    //has a seperate loop so that they always appear above the bonds
    for(var atom of atoms) {
        atom.draw(ctx);
        atom.drawValence(ctx);
    }

    window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);