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
      console.log(data);
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

function findElement(e){
    console.log(e)
}



loadElements()












