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

    if (document.styleSheets[0].cssRules[i].selectorText == "#compound-img") {
      if (e.target.checked) {
        document.styleSheets[0].cssRules[i].style.border =
          "solid 10px saddlebrown";
        // document.styleSheets[0].cssRules[i].style.borderRadius = "0px";
      } else {
        document.styleSheets[0].cssRules[i].style.border = "none";
        // document.styleSheets[0].cssRules[i].style.borderRadius = "15px";
      }
    }

    // if (document.styleSheets[0].cssRules[i].selectorText == "#elements") {
    //   document.styleSheets[0].cssRules[i].style.borderRadius = e.target.checked
    //     ? "0 0 0 0"
    //     : "10px 10px 0 0";
    // }

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
