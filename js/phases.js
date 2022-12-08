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

  for (let i = 0; i < document.styleSheets[0].cssRules.length; i++) {
    console.log(document.styleSheets[0].cssRules[i].selectorText);

    if (
      document.styleSheets[0].cssRules[i].selectorText ==
      "h1, h2, h3, h4, h5, h6, p"
    ) {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.color = "#fff";
        element.style.textShadow = "2px 2px 0px #333";
      } else {
        element.style.color = "black";
        element.style.textShadow = "none";
      }
    }

    if (document.styleSheets[0].cssRules[i].selectorText == "main") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.backgroundColor = "#777";
      } else {
        element.style.backgroundColor = "rgb(191, 248, 252)";
      }
    }
  }
}
