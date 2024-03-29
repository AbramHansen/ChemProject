const box = document.querySelector("#elementInfo");

const elementbox = document.querySelector("#Element");

// Fetches the Elements.json file
// function getJSON() {
//     fetch("./elements.json")
//     .then(response => response.json())
//     .then(json => console.log(json));
// }
// // Returns the JSON File
// let elementslist = getJSON();
// getJSON().elements.forEach(element => {
//     let section = document.createElement('section');
//     let name = document.createElement('p');
//     let number = document.createElement('h3');
//     let symbol = document.createElement('h3');
//     let image = document.createElement('img');
//     name.innerHTML = `${element.name}`;
//     number.innerHTML = `${element.number}`;
//     image.setAttribute('src', element.image.url);
//     image.setAttribute('alt', `${element.image.title}`);
//     symbol.innerHTML = `${element.symbol}`;
//     section.append(name);
//     section.append(number);
//     section.append(image);
//     section.append(symbol);
//     box.appendChild(section);
// })

//will finish later

async function loadElements() {
  let elements = await getElements();
  appendElements(elements);
}

async function getElements() {
  let response = await fetch("js/elements.json");

  if (response.ok) {
    data = await response.json();
    data = data.elements;
    return data;
  } else {
    throw Error(await response.text());
  }
}

function appendElements(data) {
  let elementsContainer = document.getElementById("elements");

  data.forEach((element) => {
    let container = document.createElement("div");
    let number = document.createElement("p");
    let weight = document.createElement("p");
    let symbol = document.createElement("p");
    let name = document.createElement("p");

    number.textContent = element.number;
    weight.textContent = element.atomic_mass.toFixed(3);
    symbol.textContent = element.symbol;
    name.textContent = element.name;

    container.classList.add("element");
    number.classList.add("number");
    weight.classList.add("weight");
    symbol.classList.add("symbol");
    name.classList.add("name");

    container.appendChild(number);
    container.appendChild(weight);
    container.appendChild(symbol);
    container.appendChild(name);

    container.addEventListener("click", findElement);

    elementsContainer.appendChild(container);
  });
}

async function findElement(e) {
  document.getElementById("info-title").textContent = "Element Info";

  let elements = await getElements();

  console.log(e);

  let text = "";

  if (e.target.localName == "p") {
    text = e.target.parentElement.children[3].textContent;
    console.log(text);
  } else {
    text = e.target.children[3].textContent;
    console.log(text);
  }

  let element = elements.find((element) => element.name == text);

  let infoContainer = document.getElementById("info");

  infoContainer.children.length > 1
    ? infoContainer.removeChild(infoContainer.children[1])
    : "";

  let div = document.createElement("div");
  let commonName = document.createElement("h3");
  let elementName = document.createElement("p");
  let chemicalFormula = document.createElement("p");
  let uses = document.createElement("p");
  let addButton = document.createElement("button");
  let compoundImg = document.createElement("img");

  commonName.textContent = element.nameame;
  elementName.innerHTML = `<strong>Element Name</strong><br>${element.name}`;
  chemicalFormula.innerHTML = `<strong>Symbol</strong><br> ${element.symbol}`;
  uses.innerHTML = `<strong>Summary</strong><br>${element.summary}`;
  compoundImg.src = element.bohr_model_image;
  compoundImg.style.boxShadow = "0px 0px 3px #999";
  let minecraftMode = document.getElementById("switch").checked;
  if (minecraftMode) compoundImg.style.border = "solid 10px saddlebrown";

  addButton.innerHTML = "Add to Pot";
  addButton.onclick = function() {
    addAtom(element.symbol, element.shells[element.shells.length - 1]);
  };

  div.appendChild(commonName);
  div.appendChild(elementName);
  div.appendChild(chemicalFormula);
  div.appendChild(uses);
  div.appendChild(compoundImg);
  div.appendChild(addButton);

  infoContainer.appendChild(div);
}

loadElements();
