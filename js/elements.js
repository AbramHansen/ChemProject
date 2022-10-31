const box = document.querySelector('#elementInfo');

const elementbox = document.querySelector("#Element")







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
  
    data.forEach((elements) => {
      let element = document.createElement("p");
      element.textContent = elements.name;
      element.classList.add("Element");
      element.addEventListener("click", findElement);
  
      elementsContainer.appendChild(element);
    });
  }

  async function findElement(e) {
    let elements = await getElements();
  
    let element = elements.find(
      (element) => element.name == e.target.textContent
    );
  
  
    let infoContainer = document.getElementById("info");
  
    infoContainer.children.length > 1
      ? infoContainer.removeChild(infoContainer.children[1])
      : "";
  
    let div = document.createElement("div");
    let commonName = document.createElement("h3");
    let elementName = document.createElement("p");
    let chemicalFormula = document.createElement("p");
    let uses = document.createElement("p");
  
    commonName.textContent = element.nameame;
    elementName.innerHTML = `<strong>Element Name</strong><br>${element.name}`;
    chemicalFormula.innerHTML = `<strong>Symbol</strong><br> ${element.symbol}`;
    uses.innerHTML = `<strong>Summary</strong><br>${element.summary}`;
  
    div.appendChild(commonName);
    div.appendChild(elementName);
    div.appendChild(chemicalFormula);
    div.appendChild(uses);
  
    infoContainer.appendChild(div);


    img = document.getElementById("compound-img");
    img.src = element.bohr_model_image;
    img.style.borderRadius = "15px";
    img.style.boxShadow = "0px 0px 3px #999";
  }

loadElements()
