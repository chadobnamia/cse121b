const areaGeometry = document.querySelector('#geometry');
let geometryDeets = [];

const displayContent = (geometry) =>{
    geometry.forEach(shape =>{

        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');
        const div = document.createElement('div');

        h3.textContent = shape.shape;

        img.setAttribute('src', shape.imageUrl);
        img.setAttribute('alt', shape.shape);

        div.innerHTML = shape.input;

        article.appendChild(h3);
        article.appendChild(img)
        article.appendChild(div);

        areaGeometry.appendChild(article)
    });
}

const getData = async () =>{
    const response = await fetch ('https://chadobnamia.github.io/cse121b/geometry.json');

    geometryDeets = await response.json();

    displayContent(geometryDeets);
}

const filterShapes = (geometry) => {
    const filter = document.getElementById('shapeSelect').value;

    switch (filter) {
        case 'rectangle':
            displayContent(geometry.filter(shape => shape.shape.includes('Rectangle')));
            break;
        case 'circle':
            displayContent(geometry.filter(shape => shape.shape.includes('Circle')));
            break;
        case 'triangle':
            displayContent(geometry.filter(shape => shape.shape.includes('Triangle')));
            break;
        default:
            displayContent(geometry);
            break;
    }
};

getData();




    // function showFields() {
    //     var shape = document.getElementById("shapeSelect").value;
    //     var rectangleFields = document.getElementById("rectangleFields");
    //     var circleFields = document.getElementById("circleFields");
    //     var triangleFields = document.getElementById("triangleFields");
    
    //     switch(shape) {
    //         case "rectangle":
    //             rectangleFields.style.display = "block";
    //             circleFields.style.display = "none";
    //             triangleFields.style.display = "none";
    //             break;
    //         case "circle":
    //             rectangleFields.style.display = "none";
    //             circleFields.style.display = "block";
    //             triangleFields.style.display = "none";
    //             break;
    //         case "triangle":
    //             rectangleFields.style.display = "none";
    //             circleFields.style.display = "none";
    //             triangleFields.style.display = "block";
    //             break;
    //         default:
    //             rectangleFields.style.display = "none";
    //             circleFields.style.display = "none";
    //             triangleFields.style.display = "none";
    //             break;
    //     }
    // }
    
    // // Initially show the fields for the default selected shape
    // showFields();