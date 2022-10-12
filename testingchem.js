
const main = document.querySelector('main');


function createChemistry(data) {
    // Populating the elements on the web page
    let elementsList = data[0];
    for (let i = 0; i < elementsList.length; i++){
        let element = document.createElement('div');
        singleElement = elementsList[i];
        element.textContent = elementsList[i];
        main.appendChild(element);
    }
}

createChemistry(getData());


function getData () {
    // API call to retrive the Periodic Table Information from 
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://periodic-table-elements-info.herokuapp.com/elements", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        return result;
}







