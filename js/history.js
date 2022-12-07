document.getElementById("switch").addEventListener("change", switchEvent);
function switchEvent(e) {

    let gasImg = document.getElementById("history-gases");
    let milkImg = document.getElementById("history-milk");
    let atomicImg = document.getElementById("history-atomic");
    let headingBackground = document.getElementById("history-heading");
    let mineImage = document.getElementById("mine-img");
    let mainBackground = document.getElementById("main-page");

    gasImg.src = e.target.checked
    ? "images\\history\\mine-bubbles.jpeg"
    : "images\\history\\bubbles.jpg";

    milkImg.src = e.target.checked
    ? "images\\history\\mine-milk.jpeg"
    : "images\\history\\milk.jpeg";

    atomicImg.src = e.target.checked
    ? "images\\history\\mine-tnt.gif"
    : "images\\history\\atomic-theory.jpeg";

    headingBackground.style = e.target.checked
    ? "background-image: url('../images/history/ore-pattern.png');background-size: contain;"
    : "background-image: url('../images/history/chem.jpg');";

    mineImage.style = e.target.checked
    ? "display:block;"
    : "display:none;";

    mineImage.style = e.target.checked
    ? "display:block;"
    : "display:none;";

    mainBackground.style = e.target.checked
    ? "background: linear-gradient(to bottom, #ffffff, #24b0c2, #ffffff);"
    : "background: linear-gradient(to bottom, #ffffff, #89b983, #ffffff);";

}
