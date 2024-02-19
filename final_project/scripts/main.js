const areaGeometry = document.querySelector('#geometry');
let geometryDeets = [];

updateParam = () =>{
    const shapes = document.getElementById('shapes').value;
    const paramDivs = document.getElementById('params');
    paramDivs.innerHTML = shapeParams[shape].join("<br>");
}

calculateArea = () =>{
    const shapes = document.getElementById('shapes').value;
    let area;
    switch(shapes){
        case "circle":
            const radius = parseFloat(document.getElementById("radius").value);
            area = Math.PI * radius * radius;
            break;
        case "rectangle":
            const length = parseFloat(document.getElementById('length').value);
            const width = parseFloat(document.getElementById('width').value);
            area = length * width;
            break;
        case "triangle":
            const base = parseFloat(document.getElementById("base").value);
            const height = parseFloat(document.getElementById("height").value);
            area = 0.5 * base * height;
            break; 
        case "square":
            const side = parseFloat(document.getElementById('side').value);
            area = side * side;
            break;
        default:
            area="Invalid shape";
    }
}
const getData = async () => {
    // Fetch temple data
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    // Convert response to JavaScript object
    templeList = await response.json();

    // Call displayTemples function and pass the templeList
    displayTemples(templeList);
};