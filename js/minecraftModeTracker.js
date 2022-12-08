if (localStorage.getItem("minecraftMode")) {
  let toggle = document.getElementById("switch");
  localStorage.getItem("minecraftMode") == 1
    ? toggle.click()
    : (toggle.checked = false);
} else {
  localStorage.setItem("minecraftMode", 0);
}

document
  .getElementById("switch")
  .addEventListener("change", updateLocalStorage);

function updateLocalStorage(e) {
  e.target.checked
    ? localStorage.setItem("minecraftMode", 1)
    : localStorage.setItem("minecraftMode", 0);

  console.log(localStorage);
}
