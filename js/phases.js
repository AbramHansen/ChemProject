document.getElementById("switch").addEventListener("change", switchEvent);
function switchEvent(e) {

    let solidImg = document.getElementById("solid");
    let liquidImg = document.getElementById("liquid");
    let gasImg = document.getElementById("gas");
    let plasmaImg = document.getElementById("plasma");

    solidImg.src = e.target.checked
    ? "images\\phases\\MinecraftIce.jpg"
    : "images\\phases\\Ice.jpg";

    liquidImg.src = e.target.checked
    ? "images\\phases\\MinecraftWater.jpg"
    : "images\\phases\\water.jpg";

    gasImg.src = e.target.checked
    ? "images\\phases\\MinecraftSteam.jpg"
    : "images\\phases\\steam.jpg";

    plasmaImg.src = e.target.checked
    ? "images\\phases\\minecraftSun.jpg"
    : "images\\phases\\sun.jpg";

}