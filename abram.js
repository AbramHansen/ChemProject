const canvas = document.getElementById("testCanvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 600;

class Atom {
    constructor(type, numValence) {
        this.type = type;
        this.numValence = numValence;
        this.bonds = [];
        this.x = 0;
        this.y = 0;

        this.shellMax = 8;
        if(this.type == "H" || this.type == "He"){
            this.shellMax = 2;
        }
    }
    checkForBonds(atoms) {
        console.log("level 0");

        var numNeeded = this.shellMax - this.numValence + this.bonds.length;

        while(numNeeded > 0) {    //tests if we need bonds in the first place     
            console.log("level 1");
            var bondMade = false;
            for(var atom of atoms) {
                var atomNumNeeded = atom.shellMax - atom.numValence + atom.bonds.length;
                console.log("level 3");
                if(!(atom.x == this.x && atom.y == this.y)) { //tests to makes sure it's not itself
                    console.log("level 4");
                    if (atom.x < this.x + 2 && atom.x > this.x - 2 && atom.y < this.y + 2 && atom.y > this.y - 2) { //check if next to the atom
                        console.log("level 5");
                        if(atomNumNeeded > 0) {
                            numNeeded--;
                            atomNumNeeded--;
                            this.bonds.push(atom);
                            atom.bonds.push(this);
                            console.log("Bond!");
                            bondMade = true;
                        }
                    }
                }
            }
            if(!bondMade){ //prevents and infinite loop if no bonds are being made
                numNeeded = 0;
            }
        }
    }
    draw(ctx) {
        ctx.beginPath();

        //draw nucleus
        ctx.moveTo(this.x * 40, this.y * 40);
        ctx.fillStyle = '#FF0000';
        ctx.strokeStyle = "black";
        ctx.arc(this.x * 40, this.y * 40, 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = '#FF0000';
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#000000';
        ctx.fillText(this.type, this.x * 40 - 5, this.y * 40 + 5);

        var top = 0;
        var bottom = 0;
        var left = 0;
        var right = 0;

        this.drawBonds(ctx)
    }

    drawBonds(ctx) {
        for(var bond of this.bonds) {
            ctx.moveTo(this.x * 40, this.y * 40);
            ctx.lineTo(bond.x * 40, bond.y * 40);
            ctx.stroke();
        }

        var slots = [0,0,0,0]; //right, top, left, bottom

        for(var bond of this.bonds) {
            if (bond.x > this.x) {
                slots[0] = 3;
            } else if (bond.y > this.y) {
                slots[1] = 3;
            } else if (bond.x < this.x) {
                slots[2] = 3;
            } else if (bond.y > this.y) {
                slots[3] = 3;
            }
        }

        var remainingValenceElectrons = this.numValence - this.bonds.length;

        console.log(remainingValenceElectrons);

        while (remainingValenceElectrons > 0) {
            for(var i = 0; i < slots.length; i++) {
                if (remainingValenceElectrons > 0 && slots[i] != 3) {
                    slots[i]++;
                    remainingValenceElectrons--;
                }
            }
        }

        console.log(slots);

        for(var slot of slots) {
            var deg = 0;
            if (slot == 1) {
                ctx.moveTo(this.x * 40, this.y * 40);
                ctx.fillStyle = '#FF0000';
                ctx.strokeStyle = "black";
                ctx.arc(this.x * 40 + Math.sin(deg) * 20, this.y * 40 + Math.cos(deg) * 20, 2, 0, 2 * Math.PI, false);
                ctx.fillStyle = '#FF0000';
                ctx.fill();
            } else if (slot == 2) {

            }
            deg += Math.PI;
        }
    }
}

/*class Atom {
    constructor(type, x, y) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.angle = 0
        if(type == 11) {
            this.protons = 11;
            this.neutrons = 11;
            this.electrons = [2,8,1]; //number of electrons in each shell
        }
    }

    draw(ctx) {
        ctx.beginPath();

        //draw nucleus
        ctx.moveTo(this.x, this.y);
        ctx.fillStyle = '#FF0000';
        ctx.strokeStyle = "black";
        ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = '#FF0000';
        ctx.fill();
        ctx.stroke();

        //draw electrons
        var distanceFromNucleus = 20;
        var layer = 1;
        for (var shell of this.electrons) {
            for (let i = 0; i < shell; i++) {
                const speed = 2;
                var electronAngle = this.angle * layer * speed + Math.PI * 2 / shell * i;
                var electronX = this.x + Math.cos(electronAngle) * distanceFromNucleus;
                var electronY = this.y + Math.sin(electronAngle) * distanceFromNucleus;

                ctx.moveTo(electronX,electronY);
                ctx.arc(electronX, electronY, 5, 0, 2 * Math.PI, false);
                ctx.fillStyle = '#03e8fc';
                ctx.fill();
            }
            distanceFromNucleus += 20;
            layer++;
        }
        this.angle += 0.02;
        this.x += 0.1;
        this.y += 0.1;
    }
} */


var atoms = [new Atom("Na", 1), new Atom("O", 6), new Atom("N", 5), new Atom("He", 2), new Atom("N", 5)];

atoms[0].x = 4;
atoms[0].y = 4;
atoms[1].x = 5;
atoms[1].y = 4;
atoms[2].x = 6;
atoms[2].y = 4;
atoms[3].x = 4;
atoms[3].y = 5;
atoms[4].x = 7;
atoms[4].y = 5;

/*atoms.pop();
atoms.pop();
atoms.pop();
atoms.pop();*/

for(var atom of atoms) {
    atom.checkForBonds(atoms);
}

function animate() {
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.font = '12px serif';

    for(var atom of atoms) {
        atom.draw(ctx);
    }

    requestAnimationFrame(animate);
}

animate()