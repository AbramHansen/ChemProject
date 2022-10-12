const canvas = document.getElementById("testCanvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 600;

class Electron {
    constructor(shell) {
        this.shell = shell;
    }
}

class Atom {
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
}

sodiumAtom = new Atom(11, 100, 100);

function animate() {
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);

    sodiumAtom.draw(ctx);
    requestAnimationFrame(animate);
}

animate()