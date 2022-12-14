document.getElementById("switch").addEventListener("change", switchEvent);

// Change style and images when minecraft switch is selected.
function switchEvent(e) {
  for (let i = 0; i < document.styleSheets[0].cssRules.length; i++) {
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
        element.style.backgroundColor = "";
        element.style.backgroundImage = 'url("mc-stone2.webp")';
      } else {
        element.style.backgroundColor = "#bff8fc";
        element.style.backgroundImage = "none";
      }
    }
  }
}
