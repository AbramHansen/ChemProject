document.getElementById("switch").addEventListener("change", switchEvent);
function switchEvent(e) {

    let gasImg = document.getElementById("history-gases");
    let milkImg = document.getElementById("history-milk");
    let atomicImg = document.getElementById("history-atomic");


    gasImg.src = e.target.checked
    ? "images\\history\\mine-bubbles.jpeg"
    : "images\\history\\bubbles.jpg";

    milkImg.src = e.target.checked
    ? "images\\history\\mine-milk.jpeg"
    : "images\\history\\milk.jpeg";

    atomicImg.src = e.target.checked
    ? "images\\history\\mine-tnt.gif"
    : "images\\history\\atomic-theory.jpeg";

}