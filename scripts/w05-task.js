/* W05: Programming Tasks */



/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    // Process each temple in the temple array
    temples.forEach(temple => {
        // Create HTML elements
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');

        // Set temple name as h3 text content
        h3.textContent = temple.templeName;

        // Set image source and alt attributes
        img.setAttribute('src',temple.imageUrl);
        img.setAttribute('alt',temple.location);

        // Append h3 and img to article
        article.appendChild(h3);
        article.appendChild(img);

        // Append article to templesElement
        templesElement.appendChild(article);
    });
};
/* async getTemples Function using fetch()*/
const getTemples = async () => {
        // Fetch temple data
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

        // Convert response to JavaScript object
        templeList = await response.json();

        // Call displayTemples function and pass the templeList
        displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    // Select all <article> elements inside templesElement
    const articles = templesElement.querySelectorAll('article');
    
    // Loop through each <article> element and remove it
    articles.forEach(article => {
        article.remove();
    });
};

/* filterTemples Function */
const filterTemples = (temples) => {
    // Clear the output
    reset();

    // Get the value of the filter dropdown
    const filter = document.getElementById('filtered').value;

    // Use a switch statement to handle different filter cases
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case 'all':
        default:
            displayTemples(temples);
            break;
    }
};

/* Event Listener */
document.querySelector('#filtered').addEventListener('change', () => {
    // Call the filterTemples function and pass an arrow function result with the templeList as the argument
    filterTemples(templeList);
});