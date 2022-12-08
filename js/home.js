document.getElementById("lessons").addEventListener("click", toggle);
document.getElementById("back").addEventListener("click", toggle);

function toggle() {
  console.log("Triggered");

  var hide = document.getElementById("hidden");
  var lesson = document.getElementById("buttons");

  console.log(hide.style.display);

  if (hide.style.display == "") {
    console.log("1");
    hide.style.display = "block";
    lesson.style.display = "none";
  } else {
    console.log("2");
    hide.style.display = "none";
    lesson.style.display = "block";
  }
}
