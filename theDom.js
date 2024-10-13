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

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// allLis.forEach((li, i ) => { //in line styles always beat class styles because it's added to the element itself
//     const color = colors[i];
//     li.style.color = color;
// });

//getComputedStyle is a great way to figure out what's going on on the page

// const todo = document.querySelectorAll('#todos .todo');
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