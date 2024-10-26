const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    alert('Hello, Window!')
});

//to find the first li on the page
document.querySelector('li');

//to find the first element with class of special
document.querySelector('.special');

//to find the first element with id of main
document.querySelector('#main');

//to find the first li with the class of special, nested inside of a ul, nested inside a section
document.querySelector('section ul li.special');

//to find all li's on the page
document.querySelectorAll('li');

//to find all elements with the class of special on the page
document.querySelectorAll('.special');

const allLis = document.querySelectorAll('li'); //not an array but an array-like object; we can iterate over it!

for (let i = 0; i < allLis.length; i++) {
    console.log(allLis[i].innerText);
};

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'];

//the code below will change the color of all li's
// allLis.forEach((li, i ) => { //in line styles always beat class styles because it's added to the element itself
//     const color = colors[i];
//     li.style.color = color;
// });


//getComputedStyle is a great way to figure out what's going on on the page


const todos = document.querySelectorAll('#todos .todo');

const todoBtns = document.querySelectorAll('ul button');

//strikes through an li in the todo class if the button to the right of it is clicked
for (let i = 0; i < todos.length; i++) {
    //specifies the button to the right of the current li    
    todoBtns[i].addEventListener('click', function () { 
        //toggles the class 'done' when the button to the right of the current li is clicked
        todos[i].classList.toggle('done');
    });
};

const newh2 = document.createElement('h2'); //creates an empty element newh2

newh2.innerText = 'I am an h2 added to the DOM using JavaScript!' //changes newh2's innerText

newh2.classList.add('special'); //changes newh2's class to special

//to move newh2 to the DOM, we need to select an element to append it to
const section = document.querySelector('section');

section.appendChild(newh2); //appends newh2 to the end of section

const newImg = document.createElement('img'); //creates an empty image element

//adds a source for the image
newImg.src = 'https://images.unsplash.com/photo-1728160641449-e64ea3e7f7ab?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

//changes newImg's width to 300 pixels
newImg.style.width = '300px';

//appends newImg to the end of body
document.body.appendChild(newImg);


//append, prepend, and insertBefore

const parentUL = document.querySelector('ul');
const newLI = document.createElement('li');
const firstLI = document.querySelector('li.todo');
const lastLI = document.querySelectorAll('li.todo')[2];

newLI.innerText = 'I AM A NEW LI';

//syntax for insertBefore is parent.insertBefore(element you want to insert, element you want to follow the first element)
parentUL.insertBefore(newLI, lastLI); //inserts newLI before lastLI

const italics = document.createElement('i');
italics.innerText = 'I AM ITALICS!';

const firstP = document.querySelector('p');

firstP.insertAdjacentElement('beforeend', italics); //inserts italics before the end of the of the paragraph tag

firstP.prepend(italics, newLI); //adds element(s) to the beginning of the tag; can insert multiple elements at a time vs appendChild() when you can only add 1

/* 
removeChild() and remove() work in similar ways to appendChild() and append()

parent.removeChild(child) vs element.remove()
*/


//DOM Events
const btnClicker = document.querySelector('#clicker');

//JS requires a function for events; the below is NOT recommended
/*
btnClicker.onclick = function () {
    console.log('You clicked me')
};*/

//addEventListener

btnClicker.addEventListener('click', function () {
    alert('Clicked!!')
});

btnClicker.addEventListener('mouseover', function () {
    btnClicker.innerText = 'Stop touching me';
});

btnClicker.addEventListener('mouseout', function () {
    btnClicker.innerText = 'Clicker';
}); 

window.addEventListener('scroll', function ()  {
    console.log('Stop scrolling');
});

const impossibleBtn = document.querySelector('#impossible');

// impossibleBtn.addEventListener('mouseover', function () {
//     //the window has an innerHeight and an innerWidth property which can be used to find the edges
//     const height = Math.floor(Math.random() * window.innerHeight);
//     const width = Math.floor(Math.random() * window.innerWidth);
    
//     impossibleBtn.style.left = `${width}px`;
//     impossibleBtn.style.top = `${height}px`;

// });

// impossibleBtn.addEventListener('mouseover', function () {
//     impossibleBtn.innerText = 'You got me!';
//     document.body.style.backgroundColor = 'green';
// });

//attach eventListeners to multiple elements
const container = document.querySelector('#boxes');

const changeColor = function () {
    const h1 = document.querySelector('#color');
     //inside of an event handler, 'this' will refer to the individual element that the eventListener has been added to
    h1.style.color = this.style.backgroundColor;
};


for (let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    //adds the class of box to the current box
    box.classList.add('box');
    //adds a box of the current color to the end of container
    container.appendChild(box);
    //changes the text color of h1 to the color of the box being clicked
    box.addEventListener('click', changeColor); 
};

//key events
// document.body.addEventListener('keypress', function(e) {
//     console.log(e);
// });

const input = document.querySelector('#username');

//listens for any time any key is pressed down whether or not the input is changed
input.addEventListener('keydown', function (e) {
    console.log('Key down')
});

/*Key up and key down would be better for games where you would want shift or arrow 
keys to be taken into account. They will react whenever any key is pressed, e.g., 
shift + k is two key ups and two key downs

Key press would be better if you need to know when something is changing in the input, e.g.,
shift + k results in K but key press only captures K
*/

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function (e) {
    //"key" is a property of the of the KeyboardEvent object that tells us which key was pressed
    if(e.key === 'Enter') {
        if (!this.value) return;
        //saves the current value in the input to newListItem
        const newItemText = this.value;
        //creates a new li
        const newItem = document.createElement('li');
        //sets the innerText of the new li to the value currently in the input
        newItem.innerText = newItemText;
        //adds the new item to the ul
        itemsUL.appendChild(newItem);
        //clears the input after the new li is added
        this.value = "";
    };
});

//form events & preventDefault
const form = document.querySelector('#signup');
const creditCard = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener('submit', function (e) {
    console.log('cc', creditCard.value);
    console.log('terms', termsCheckbox.checked);
    console.log('veggie', veggieSelect.value);
    //prevents default behavior
    //in this case, sending a get request to whatever url is specified
    e.preventDefault();
});

//input and change events

const formData = {};

for (let input of [creditCard, termsCheckbox, veggieSelect]) {
    //called every time the input is changed, not just when the user submits
    input.addEventListener('input', ({target}) => {
        const {name, type, value, checked} = target;
        //checks if the element is a checkbox bc the value is always on but we want the checked property
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData);
    })
};

//change works in a similar way but the input isn't registered unless the user presses
//enter or the input is blurred (the user clicks out of the input)


// creditCard.addEventListener('input', (e) => {
//     formData['cc'] = e.target.value;
//     console.log('cc changed', e);
// });

// veggieSelect.addEventListener('input', (e) => {
//     formData['veggie'] = e.target.value;
//     console.log('veggie changed', e);
// });

// termsCheckbox.addEventListener('input', (e) => {
//     formData['terms'] = e.target.checked;
//     console.log('terms changed', e);
// });

/*
The call stack is a mechanism the JS interpreter uses to keep track of its place in a script
that calls multiple functions.

With the stack, the last thing you put in will be on top, so it will be the first thing you
remove.

Dev tools > Sources > JS file > Click on the number to the left of a function call
- creates a break point
Call stack > Step into next function call
*/

/* 
JS is single threaded, meaning at any given point in time, a single JS thread is running
one line of code at most

Browsers (usually written in C++) can do tasks for JS, like setting timeouts or making requests
JS call stack recognizes web API functions and passes them to the browser. After the tasks
are completed, they return to JS and are pushed onto the call stack in the callback queue                                              
*/

/*
getBoundingClientRect() tells you information about the specified element 
*/

/*promises (objects representing the eventual completion or failure of an async operation)
MUCH easier to read & debug than nested callbacks
*/

//when creating a promise, pass in a function with two parameters, usually resolve and reject,
//which are functions themselves

//returns a new promise
const makeNewPromise = () => {
    //if a promise isn't resolved or rejected, its status is "pending"
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5) {
                resolve();
            } else {
            reject();
            }
        }, 3000);
    });
};

makeNewPromise()
    //calling the .then method on a promise will run the following code if the promise is resolved
    .then(() => {
        //console.log('Promise resolved! :D');
    }) //no semi colon here!
    //calling the .catch method on a promise will run the following code if the promise is rejected
    .catch(() => {
        //console.log('Promise rejected :(');
    });

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const pages = {
// 				'/users'        : [
// 					{ id: 1, username: 'Bilbo' },
// 					{ id: 5, username: 'Esmerelda' }
// 				],
// 				'/users/1'      : {
// 					id        : 1,
// 					username  : 'Bilbo',
// 					upvotes   : 360,
// 					city      : 'The Shire',
// 					topPostId : 454321
// 				},
// 				'/users/5'      : {
// 					id       : 5,
// 					username : 'Sammy',
// 					upvotes  : 571,
// 					city     : 'Lisbon'
// 				},
// 				'/posts/454321' : {
// 					id    : 454321,
// 					title :
// 						'Hey everyone, it\'s me, ya boy.'
// 				},
// 				'/about': 'This is the about page.'
//             };
//             const data = pages[url];
//             if (data) {
//                 resolve({status: 200, data});
//             } else {
//                 reject({status: 404});
//             };
//         }, 2000);
//     });
// };

//promise chaining
// fakeRequest('/users')
//     .then((res) => {
//         console.log(res);
//         const id = res.data[0].id;
//         return fakeRequest(`/users/${id}`);
//     })
//     .then((res) => {
//         console.log(res);
//         const postId = res.data.topPostId;
//         return fakeRequest(`/posts/${postId}`);
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     //only need one .catch for all the .then calls
//     .catch((err) => {
// 		console.log('OH NO!', err);
// 	});

/*
AJAX: Asynchronous JavaScript And XML
  - XML (Extensible Markup Language) is older and JSON is used more often nowadays; kind of a 
    parent to HTML
     - Does not support promises
     - Clunky syntax
  - Using requests to communicate with the server behind the scenes rather than in between
    page loads
    - The response is usually in the form of JSON (a format for sending data)
  - JSON: Java Script Object Notation
     - Every key must be a string with double quotes, can use arrays
     - Can't store more complicated things like functions
     - Not actual JS but very close, so we can translate very easily (JSON.parse())
*/

/*
Fetch API
  - Newer way of making requests via JS
  - Supports promises but not supported in IE
  - The content of the response is a ReadableStream
     - response.json() can be used to access the stream, but it takes time
     - .json() returns a promise, so we need to use .json().then()
  - Only rejects in the case of a network failure or if anything prevents the request
     from completing
*/


/* 
  Axios
  - Not native to JS like XML and fetch
  - External library for making HTTP requests
*/

axios
	.get('https://pokeapi.co/api/v2/pokemon/ditto')
	.then(({data}) => {
		//we don't have to parse the JSON
		console.log(data);
        for (let game of data.game_indices) {
            //logs the name of all games in which Ditto appears
            console.log(game.version.name)
        };
	})
	.catch((err) => {
		console.log('IN CATCH CALLBACK!!!');
		console.log(err);
	});


const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
	console.log(url);
	return axios.get(url);
};
const printPlanets = ({ data }) => {
	console.log(data);
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};

// fetchNextPlanets()
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(printPlanets)
// 	.then(fetchNextPlanets)
// 	.then(printPlanets)
// 	.catch((err) => {
// 		console.log('ERROR!!', err);
// 	});

/*
async
 - keyword comes before a function, making it return a promise
*/

async function greet() {
    return 'Hello!!' //promise is resolved with this value
};

greet().then((val) => {
    console.log('Promise resolved with: ', val)
});

async function add(x,y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        //throws an error if either x or y is no a number
        throw 'X and Y must be numbers!';
    }
    return x + y;
};

add('e', 'r')
    .then((val) => {
        console.log('Promise resolved with: ', val);
    })
    .catch((err) => {
        console.log('Promise rejected with: ', err);
    })


/*
await
 - pauses execution of the async function, waiting for a promise to be resolved
*/

// async function getPlanets() {
//     const res = await axios.get('https://swapi.dev/api/planets/');
//     console.log(res.data); //only runs once the previous line is complete
// };

// getPlanets().catch((err) => {
//     console.log(err)
// });

//error handling
async function getPlanets() {
    try {
        const res = await axios.get('https://swapi.dev/api/planets/');
        console.log(res.data);
    } catch (e) {
        console.log('In catch', e);
    }
};

getPlanets();

//multiple awaits

const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				reject({ bodyBoundary, elRight, amount });
			}
			else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

const awaitBtn = document.querySelector('#await');
async function animateRight(el, amt) {
	await moveX(el, amt, 1000);
    //no need for try/catch
	await moveX(el, amt, 1000);
	await moveX(el, amt, 1000);
	await moveX(el, amt, 1000);
	await moveX(el, amt, 1000);
	await moveX(el, amt, 1000);
	await moveX(el, amt, 1000);
	await moveX(el, amt, 1000);
	await moveX(el, amt, 1000);
	await moveX(el, amt, 1000);
}
animateRight(awaitBtn, 100).catch((err) => {
	console.log('Hit the right edge! Now Moving left!');
	//moves the button in the opposite direction, in this case, left
    animateRight(awaitBtn, -100);
});

//parallel vs sequential requests

//SEQUENTIAL
// async function get3Pokemon() {
        //waits for a resolved value and stores that value in the variable
//     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// };

//PARALLEL
// async function get3Pokemon() {
//     //requests are being sent roughly at the same time
//     //these variables are promises
//     const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     poke1 = await prom1;
//     poke2 = await prom2;
//     poke3 = await prom3;
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// };

//get3Pokemon();

function changeBodyColor(color,delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

//SEQUENTIAL - each color is visible before the next change
async function lightShow() {
    await changeBodyColor('teal', 1000);
    await changeBodyColor('maroon', 1000);
    await changeBodyColor('violet', 1000);
    await changeBodyColor('aquamarine', 1000);
};

//PARALLEL - only aquamarine is visible because these run at roughly the same time
async function lightShow() {
    const p1 = changeBodyColor('teal', 1000);
    const p2 =  changeBodyColor('maroon', 1000);
    const p3 = changeBodyColor('violet', 1000);
    const p4 = changeBodyColor('aquamarine', 1000);
    await p1;
    await p2;
    await p3;
    await p4;
};

// lightShow();

//Promise.all accepts an array of promises
async function get3Pokemon() {
    //requests are being sent roughly at the same time
    //these variables are promises
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    const results = await Promise.all([prom1, prom2, prom3]);
    //console.log(results);
    printPokemon(results);
};

function printPokemon(results) {
    for (let pokemon of results) {
        console.log(pokemon.data.name);
    };
};

get3Pokemon();

/* 
prototypes
 - template objects
 - ex. every array has a property called __proto__ which is a reference to a blueprint object
*/

String.prototype.yell = function() {
    return `${this.toUpperCase()}!!`; //this refers to the string itself
};

Array.prototype.pop = function () {
    //replaces the previous pop() method
    return 'Sorry, I like that element. I\'ll never pop it off!'
};

//prototype is the actual object where we can add methods/properties
//__proto__ is a reference to the prototype object

//factory functions make objects and return them; not commonly used

// function hex (r, g, b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// function rgb(r, g, b) {
//     return `rgb(${r}, ${g}, ${b})`
// };

// function makeColor(r,g,b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rbg = function () {
//         const {r,g,b} = this; 
//         return `rgb(${r}, ${g}, ${b})`
//     };
//     color.hex = function() {
//         const {r,g,b} = this; 
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }

//     return color;
// };

//constructor functions (more common than factory functions)

//contructor functions get capital first letters
// function Color(r,g,b) {
//     //this refers to the window 
//     this.r = r;
//     this.g = g;
//     this.b = b;
// };

/*when you call a constructor function with the keyword 'new', the newly created object
is the this context
DO NOT USE ARROW FUNCTIONS because 'this' behaves differently in them
*/
// new Color(25, 230, 47);

// Color.prototype.rgb = function() {
//     //this will be set to whatever is on the left side of the dot notation
//     const {r,g,b} = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function () {
//     const {r,g,b} = this; 
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = function (a = 1.0) {
//     const {r,g,b} = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// };

/*
JS classes also use an uppercase first letter
 - requires capital letter, constructor function, and new keyword
*/

class Color {
    //a function that will execute immediately whenever a new Color is created
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    };
    greet() {
        return `Hello from ${this.name}!`
    };
    innerRGB() {
        const {r,g,b} = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb() {
        //this will be set to whatever is on the left side of the dot notation
        return `rgb(${this.innerRGB()})`;
    };
    hex() {
        const {r,g,b} = this; 
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    rgba(a = 1.0) {
        const {r,g,b} = this;
        return `rgba(${this.innerRGB()}, ${a})`;
    };
};

//creates new empty object and sets the value of 'this' to that object
const red = new Color(255, 67, 89, 'tomato');

//hsl = hue (0-360 like a color wheel), saturation (0-100%), lightness (0-100%)