const canvas = document.getElementById("testCanvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 600;

const SCALE = 20;

class Atom {
    constructor(type, numValence) {
        this.type = type;
        this.numValence = numValence;
        this.bonds = [];
        this.x = 0;
        this.y = 0;

        if(this.type == "H" || this.type == "He"){
            this.shellMax = 2;
        } else {
            this.shellMax = 8;
        }
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x * SCALE, this.y * SCALE, 5, 0, 2 * Math.PI, false);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#FF0000';
        ctx.stroke();
        this.drawBonds(ctx);
    }

    drawBonds(ctx) {
        for(var bond of this.bonds){
            ctx.beginPath();
            ctx.moveTo(this.x * SCALE, this.y * SCALE);
            ctx.lineTo(bond.x * SCALE, bond.y * SCALE);
            ctx.stroke();
        }
    }
}

function checkForBonds(atoms) {
        for(let i = 0; i < atoms.length; i++) {
            for(let j = 0; j < atoms.length; j++) {
                if(i != j) {
                    //if the distance to the other atom is less than 1
                    if(Math.abs(Math.sqrt((atoms[j].x - atoms[i].x) * (atoms[j].x - atoms[i].x) + (atoms[j].y - atoms[i].y) * (atoms[j].y - atoms[i].y))) <= 1 ) {
                        while(atoms[i].numValence + atoms[i].bonds.length < atoms[i].shellMax && atoms[j].numValence + atoms[j].bonds.length < atoms[j].shellMax) {
                            atoms[i].bonds.push(atoms[j]);
                            atoms[j].bonds.push(atoms[i]);
                            console.log("SDF")
                        }
                    }
                }
            }
        }
}

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

function animate() {
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.font = '12px serif';

    for(var atom of atoms) {
        atom.draw(ctx);
    }

    requestAnimationFrame(animate);
}

checkForBonds(atoms)
console.log("BONDS CHECKED")
animate()