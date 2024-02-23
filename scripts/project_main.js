
/* W05: Programming Tasks */

/* Declare and initialize global variables */
const geomElement = document.querySelector('#geometry');
let templeList = [];

/* async displayTemples Function */
const displayGeometry = (geometries) => {
    // Process each temple in the temple array
    geometries.forEach(element => {
        // Create HTML elements
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');
        const div = document.createElement('div');

        h3.textContent = element.shape;

        img.setAttribute('src', element.imageUrl);
        img.setAttribute('alt', element.shape);

        div.innerHTML = element.input;


        article.appendChild(h3);
        article.appendChild(img)
        article.appendChild(div);

        geomElement.appendChild(article)
        
    });
};
/* async getTemples Function using fetch()*/
const getShapes = async () => {
        // Fetch temple data
        const response = await fetch("https://chadobnamia.github.io/cse121b/geometry.json");

        // Convert response to JavaScript object
        shapeList = await response.json();

        // Call displayTemples function and pass the templeList
        displayGeometry(shapeList);
};

/* reset Function */
const reset = () => {
    // Select all <article> elements inside templesElement
    const articles = geomElement.querySelectorAll('article');
    
    // Loop through each <article> element and remove it
    articles.forEach(article => {
        article.remove();
    });
};

/* filterTemples Function */
const filterData = (geometries) => {
    // Clear the output
    reset();

    // Get the value of the filter dropdown
    const filter = document.getElementById('filtered').value;

    // Use a switch statement to handle different filter cases
    switch (filter) {
        case 'rectangle':
            displayGeometry(geometries.filter(element => element.shape.includes('Rectangle')));
            break;
        case 'circle':
            displayGeometry(geometries.filter(element => element.shape.includes('Circle')));
            break;
        case 'square':
            displayGeometry(geometries.filter(element => element.shape.includes('Square')));
            break;
        case 'triangle':
            displayGeometry(geometries.filter(element => element.shape.includes('Triangle')));
            break;
        default:
            displayTemples(geometries);
            break;
    }
};
getShapes();
/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => {
    // Call the filterTemples function and pass an arrow function result with the templeList as the argument
    filterData(shapeList);

const filterVal = document.querySelector('#filtered').value

switch(filterval){
    case "Rectangle":
        var a = document.querySelector("#length").value;
        var a = document.querySelector("#width").value;
        document.querySelector('button').addEventListener('click', (a,b)=>{
            const span = document.createElement('span');
            span = a * b;
            document.querySelector('#areaGeometry').appendChild(span)
        })
    break;
}
});


function areaCalc() {
    const shape = document.querySelector('#filtered').value;
    let area;

    if (shape === 'square') {
        const side = parseFloat(document.getElementById('side').value);
        area = side * side;
    } else if (shape === 'rectangle') {
        const length = parseFloat(document.getElementById('length').value);
        const width = parseFloat(document.getElementById('width').value);
        area = length * width;
    } else if (shape === 'circle') {
        const radius = parseFloat(document.getElementById('side').value);
        area = Math.PI * radius * radius;
    }else if (shape === 'triangle'){
        const length = parseFloat(document.getElementById('length').value);
        const width = parseFloat(document.getElementById('width').value);
        area = 0.5 * (base * height);
    }
    document.getElementById('result').innerText = `The area is ${area.toFixed(2)}`
};
