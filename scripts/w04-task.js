/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Richard Obnamia",
    photo: "images/Untitled design (8).jpg",
    favoriteFoods: [
        'Rice',
        'Adobo',
        'Sinigang',
        'Spaghetti',
        'Pizza',
        'Takoyaki',
        'Ramen'
    ],
    hobbies:[
        'Basketball',
        'Singing',
        'Playing guitar',
        'Playing video games',
        'Riding motorcycle',
    ],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Pasay City, Metro Manila',
        length: '6 years'

    },
    {
        place: 'Lucban, Quezon',
        length: '3 years'
    },
    {
        place: 'Santo Tomas, Batangas',
        length: '2 months'
    }
)



/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
const imageElement = document.querySelector('#photo');
imageElement.setAttribute('src',myProfile.photo);
imageElement.setAttribute('alt',`Profile of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food=>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby=>{
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place=>{
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dd);
});


