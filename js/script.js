document.getElementById("switch").addEventListener("change", switchEvent);

function switchEvent(e) {
  let h2s = document.getElementsByTagName("h2");

  for (let i = 0; i < h2s.length; i++) {
    h2s[i].style.fontFamily = e.target.checked ? "minecraft-heading" : "Arial";
  }

  let h3s = document.getElementsByTagName("h3");

  for (let i = 0; i < h3s.length; i++) {
    h3s[i].style.fontFamily = e.target.checked ? "minecraft-heading" : "Arial";
  }

  document.body.style.fontFamily = e.target.checked
    ? "minecraft-body"
    : "Arial";
}
