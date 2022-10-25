const box = document.querySelector('#elementInfo');


function changetext(){
    element1.innerHTML = 'newtext'
}

const element1 = document.querySelector("#element1")
element1.addEventListener('click', (event => {
    changetext()}))






// Fetches the Elements.json file
function getJSON() {
    fetch("./elements.json")
    .then(response => response.json())
    .then(json => console.log(json));
}
// Returns the JSON File
let elementslist = getJSON();
getJSON().elements.forEach(element => {
    let section = document.createElement('section');
    let name = document.createElement('p');
    let number = document.createElement('h3');
    let symbol = document.createElement('h3');
    let image = document.createElement('img');
    name.innerHTML = `${element.name}`;
    number.innerHTML = `${element.number}`;
    image.setAttribute('src', element.image.url);
    image.setAttribute('alt', `${element.image.title}`);
    symbol.innerHTML = `${element.symbol}`;
    section.append(name);
    section.append(number);
    section.append(image);
    section.append(symbol);
    box.appendChild(section);
})



















