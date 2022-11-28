document.getElementById("switch").addEventListener("change", switchEvent);

function switchEvent(e) {
  //   let h2s = document.getElementsByTagName("h2");

  //   for (let i = 0; i < h2s.length; i++) {
  //     h2s[i].style.fontFamily = e.target.checked ? "minecraft-heading" : "Arial";
  //   }

  //   let h3s = document.getElementsByTagName("h3");

  //   for (let i = 0; i < h3s.length; i++) {
  //     h3s[i].style.fontFamily = e.target.checked ? "minecraft-heading" : "Arial";
  //   }

  console.log(document.styleSheets);

  for (let i = 0; i < document.styleSheets[0].cssRules.length; i++) {
    // console.log(document.styleSheets[0].cssRules[i].);
    if (
      document.styleSheets[0].cssRules[i].selectorText ==
      "h1, h2, h3, h4, h5, h6"
    ) {
      console.log(document.styleSheets[0].cssRules[i]);
      document.styleSheets[0].cssRules[i].style.fontFamily = e.target.checked
        ? "minecraft-heading"
        : "Arial";
    }
  }

  document.body.style.fontFamily = e.target.checked
    ? "minecraft-body"
    : "Arial";
}
