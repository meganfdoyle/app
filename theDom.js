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

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
				'/users'        : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/users/1'      : {
					id        : 1,
					username  : 'Bilbo',
					upvotes   : 360,
					city      : 'The Shire',
					topPostId : 454321
				},
				'/users/5'      : {
					id       : 5,
					username : 'Sammy',
					upvotes  : 571,
					city     : 'Lisbon'
				},
				'/posts/454321' : {
					id    : 454321,
					title :
						'Hey everyone, it\'s me, ya boy.'
				},
				'/about': 'This is the about page.'
            };
            const data = pages[url];
            if (data) {
                resolve({status: 200, data});
            } else {
                reject({status: 404});
            };
        }, 2000);
    });
};

//promise chaining
fakeRequest('/users')
    .then((res) => {
        console.log(res);
        const id = res.data[0].id;
        return fakeRequest(`/users/${id}`);
    })
    .then((res) => {
        console.log(res);
        const postId = res.data.topPostId;
        return fakeRequest(`/posts/${postId}`);
    })
    .then((res) => {
        console.log(res);
    })
    //only need one .catch for all the .then calls
    .catch((err) => {
		console.log('OH NO!', err);
	});

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
  - Only rejects 
*/



