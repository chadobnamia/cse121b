const areaGeometry = document.querySelector('#geometry');
let geometryDeets = [];

displayContent = (content) =>{
    const jsonContent = document.getElementById("parameters");
    jsonContent.innerHTML = content.input[0];
}

const getData = async () =>{
    const response = await fetch ('https://chadobnamia.github.io/cse121b/final_project/geometry.json');

    geometryDeets = await response.json();
}
getData();
document.querySelector('#shapes').addEventListener('change', () => {
    // Call the filterTemples function and pass an arrow function result with the templeList as the argument
    displayContent(geometryDeets)});

