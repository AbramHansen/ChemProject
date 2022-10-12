var c = document.getElementById("testCanvas");
var ctx = c.getContext("2d");
for (let i = 0; i < 10; i++) {
    var len = Math.floor(Math.random() * 300);;
    var degree = Math.random() * 6.28318;
    var x = Math.floor(Math.random() * 800);;
    var y = Math.floor(Math.random() * 800);;

    for (let j = 0; j < 100; j++) {
        ctx.moveTo(x,y);
        x += Math.cos(degree) * len;
        y += Math.sin(degree) * len;
        ctx.lineTo(x,y);
        degree += 30;
        len /= 1.1;
        ctx.stroke();
    }
}
