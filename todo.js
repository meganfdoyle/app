//initial prompt
let input = prompt('What would you like to do?');

const list = [];

//quit any time the user enters 'quit'
while (input.toLowerCase() !== 'quit' && input.toLowerCase() !== 'q') {
    //add an item
    if (input.toLowerCase() === 'new') {
        const newToDo = prompt('Enter new todo');
        list.push(newToDo);
        console.log(`${newToDo} added to list`);
        // input = prompt('What would you like to do?');
    }
    //list all todos
    else if (input.toLowerCase() === 'list') {
        console.log(`******************`);
        for (let item of list) {
            console.log(`${list.indexOf(item)}: ${item}`);
        }
        console.log(`******************`);
    } 
    //remove a todo
    else if (input.toLowerCase() === 'delete') {
        let index = parseInt(prompt('Enter index of todo you wish to delete'));
        //delete the value at that index
        while (!list[index]) {
            index = prompt('Enter a *valid* index of the todo you wish to delete');
        }
        if (!isNaN(index) && list[index]) {
            let deleted = list.splice(index, 1);
            console.log(`${deleted} was removed`);
        }
    }
    //remove all todos
    else if (input.toLowerCase() === 'restart') {
        for (let i = list.length; i > 0; i--) {
            list.pop();
        }
        console.log('List cleared')
    } 
    //if the user types anything other than the above actions
    input = prompt('What would you like to do?');
}
//when the user quits
console.log('fin');


const body = document.querySelector('body');
const randomColorBtn = document.querySelector('#random');
const h3 = document.querySelector('#h3Color');

const pickColor = function () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    if (r + g + b < 290) {
        h3.style.color = 'white';
    } else {
        h3.style.color = 'black';
    }
    return `rgb(${r}, ${g}, ${b})`;
}


randomColorBtn.addEventListener('click', function () {
    const newColor = pickColor();
    body.style.backgroundColor = newColor;
    h3.innerText = newColor;
    console.log(newColor)
});

/* calling stopPropagation() on an event will stop it from bubbling up to other elements */

/* event delegation
    - allows us to refer to elements that might not be on the page yet
    - create an event listener on a parent/container element
    - in the callback, accept the event and then refer to the element that was clikcked on with
       event.target
    - you can verify the target element's type with nodeName
      - ex. event.target.NodeName === 'LI'
*/