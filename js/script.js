document.getElementById("switch").addEventListener("change", switchEvent);

function switchEvent(e) {
  for (let i = 0; i < document.styleSheets[0].cssRules.length; i++) {
    if (
      document.styleSheets[0].cssRules[i].selectorText ==
      "h1, h2, h3, h4, h5, h6"
    ) {
      document.styleSheets[0].cssRules[i].style.fontFamily = e.target.checked
        ? "minecraft-heading"
        : "Arial";
    }

    if (document.styleSheets[0].cssRules[i].selectorText == "#elements") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.backgroundColor = "#777";
        element.style.color = "#fff";
      } else {
        element.style.color = "black";
        element.style.backgroundColor = "#69C";
      }
    }

    if (document.styleSheets[0].cssRules[i].selectorText == "#compounds") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        // element.style.backgroundColor = "#777";
        element.style.backgroundColor = "";
        element.style.backgroundImage = 'url("mc-stone2.webp")';
        element.style.color = "#fff";
      } else {
        element.style.color = "black";
        element.style.backgroundColor = "#69C";
        element.style.backgroundImage = "";
      }
    }

    if (document.styleSheets[0].cssRules[i].selectorText == "#info") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.backgroundColor = "#777";
        element.style.color = "#fff";
      } else {
        element.style.color = "black";
        element.style.backgroundColor = "rgb(45, 210, 65)";
      }
    }

    if (document.styleSheets[0].cssRules[i].selectorText == ".element") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.backgroundImage = 'url("mc-stone2.webp")';
      } else {
        element.style.backgroundImage = "none";
      }
    }

    if (document.styleSheets[0].cssRules[i].selectorText == ".number") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.textShadow = "2px 2px 0px #333";
      } else {
        element.style.textShadow = "none";
      }
    }

    if (document.styleSheets[0].cssRules[i].selectorText == ".weight") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.textShadow = "2px 2px 0px #333";
      } else {
        element.style.textShadow = "none";
      }
    }

    if (document.styleSheets[0].cssRules[i].selectorText == ".symbol") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.textShadow = "2px 2px 0px #333";
      } else {
        element.style.textShadow = "none";
      }
    }

    if (document.styleSheets[0].cssRules[i].selectorText == ".name") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.textShadow = "2px 2px 0px #333";
      } else {
        element.style.textShadow = "none";
      }
    }

    if (document.styleSheets[0].cssRules[i].selectorText == ".compound") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.textShadow = "2px 2px 0px #333";
      } else {
        element.style.textShadow = "none";
      }
    }

    if (document.styleSheets[0].cssRules[i].selectorText == ".common-name") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.textShadow = "2px 2px 0px #333";
      } else {
        element.style.textShadow = "none";
      }
    }

    if (document.styleSheets[0].cssRules[i].selectorText == ".compound-name") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.textShadow = "2px 2px 0px #333";
      } else {
        element.style.textShadow = "none";
      }
    }

    if (
      document.styleSheets[0].cssRules[i].selectorText == ".chemical-formula"
    ) {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.textShadow = "2px 2px 0px #333";
      } else {
        element.style.textShadow = "none";
      }
    }

    if (document.styleSheets[0].cssRules[i].selectorText == ".uses") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.textShadow = "2px 2px 0px #333";
      } else {
        element.style.textShadow = "none";
      }
    }

    if (document.styleSheets[0].cssRules[i].selectorText == "#info-title") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.textShadow = "2px 2px 0px #333";
      } else {
        element.style.textShadow = "none";
      }
    }

    if (document.styleSheets[0].cssRules[i].selectorText == "#pot") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.backgroundColor = "#fff";
        element.style.backgroundImage = 'url("mc-dirt-background.jpeg")';
        element.style.opacity = 0.9;
      } else {
        element.style.backgroundColor = "rgb(191, 248, 252)";
        element.style.backgroundImage = "none";
      }
    }

    if (document.styleSheets[0].cssRules[i].selectorText == "header") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        // element.style.backgroundImage = 'url("mc-grass.jpeg")';
        element.style.backgroundColor = "rgb(75 150 150)";
        // element.style.maxHeight = "60px";
      } else {
        // element.style.backgroundImage = "none";
        element.style.backgroundColor = "#a7f594";
        // element.style.maxHeight = "45px";
      }
    }

    if (document.styleSheets[0].cssRules[i].selectorText == "header a") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.color = "#fff";
        element.style.textShadow = "2px 2px 0px #333";
      } else {
        element.style.color = "black";
        element.style.textShadow = "none";
      }
    }

    if (document.styleSheets[0].cssRules[i].selectorText == "header a:hover") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.backgroundColor = "";
        element.style.backgroundImage = 'url("mc-stone2.webp")';
        // element.style.padding = "10px";
      } else {
        element.style.backgroundColor = "#2cd342";
        element.style.backgroundImage = "none";
      }
    }

    if (document.styleSheets[0].cssRules[i].selectorText == "footer") {
      let element = document.styleSheets[0].cssRules[i];
      if (e.target.checked) {
        element.style.backgroundColor = "rgb(75 150 150)";
      } else {
        element.style.backgroundColor = "#a7f594";
      }
    }

    // if (document.styleSheets[0].cssRules[i].selectorText == "#compounds") {
    //   document.styleSheets[0].cssRules[i].style.borderRadius = e.target.checked
    //     ? "0 0 0 0"
    //     : "0 0 0 10px";
    // }

    // if (document.styleSheets[0].cssRules[i].selectorText == "#info") {
    //   document.styleSheets[0].cssRules[i].style.borderRadius = e.target.checked
    //     ? "0 0 0 0"
    //     : "0 0 10px 0";
    // }
  }

  document.body.style.fontFamily = e.target.checked
    ? "minecraft-body"
    : "Arial";
}
