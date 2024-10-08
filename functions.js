//intro

//defines the function
function rollDie() { 
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
};

rollDie(); //calls the function

//functions can be called within loops and other functions 
function throwDice(numRolls) {
    for (let i = 0; i < numRolls; i++){
        rollDie();
    }
};

/*
functions can accept arguments and the order matters

in the below function, the first argument given will be assigned to the paramter x
*/
function divide(x,y) {
    return x / y; //returning a value allows you to capture it and use it later vs logging a value to the console
};

/*
challenge: write a function that accepts 2 arguments: password & username
password must:
 - be at least 8 characters
 - cannot contain spaces
 - cannot contain the username
if all requirements are met, return true
ex: isValidPassword('dogLuvr123!', 'dogLuvr') returns false
*/

function isValidPassword(password, username) {
    const longEnough = password.length >= 8;
    const noSpaces = password.indexOf(' ') === -1;
    const noUsername = password.indexOf(username) === -1;
    return longEnough && noSpaces && noUsername; 
};

/*
challenge: write a function to find the average value in an array of numbers
*/

function avg (arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    average = total / arr.length;
    return average;
};

/*
challenge: write a function called isPangram which checks to see if a given sentence contains every letter of the alphabet
*/

function isPangram (sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (let letter of alphabet) {
        if (sentence.toLowerCase().indexOf(letter) === -1) {
            return false;
        }
    }
    return true;
};

/*
challenge: write a getCard() function which returns a random playing card object like:
{
    value: 'K'
    suit: 'clubs'
}
*/

function getCard () {
    const card = {
        value: '',
        suit: '',
    };

    const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

    card.value = values[Math.floor(Math.random() * values.length)];
    card.suit = suits[Math.floor(Math.random() * suits.length)];

    return card;
};
//note: since basically the same code is being run to pick a random value from the arrays, a function could be implemented


//function expression
const sum = function(x,y) { //this is an anonymous function because it is not named
    return x + y;
};

//higher order functions
function add(x,y){
    return x + y;
};

const subtract = function(x,y){
    return x - y;
};

function multiply(x,y){
    return x * y;
};

function divide(x,y){
    return x / y;
};

const operations = [add, subtract, multiply, divide]; //can call functions with operations[index](x,y)

for(let func of operations){ 
    let result = func(30, 5); //functions are treated like other values in arrays
    console.log(result);
};

const obj = {
    doSomething: multiply
};
console.log(obj.doSomething(50,2)); //functions can be stored in objects ***this is a method!

//functions can be arguments
function pickOne(f1, f2){
    let rand = Math.random();
    if (rand < 0.5) {
        f1();
    } else {
        f2();
    }
};

//functions as return values
function multiplyBy(num) {
    return function(x){
        return x * num;
    }
};

const triple = multiplyBy(3);
const double = multiplyBy(2);

//returns a function that checks whether an argument is between two numbers
function makeBetweenFunc(x,y) {
    return function(num){
        return num >= x && num <= y;
        }
};

const isChild = makeBetweenFunc(0,18);

const isNiceWeather = makeBetweenFunc(60,76);


//callback functions
function delayedGreet() {
    alert("Oh hey, didn't see you there.")
};

//setTimeout(delayedGreet, 5000); //waits 5 seconds before calling delayedGreet


const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    alert('What did I JUST say.')
});

//array callback methods

//forEach
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// numbers.forEach(function (num) {
//     console.log(num * 2);
// });

function printTriple(n) {
    console.log(n * 3);
};

// numbers.forEach(printTriple);

//map
const doubles = numbers.map(function (num) {
    return num * 2;
});

const numDetails = numbers.map(function (n) {
    return {
        value: n,
        isEven: n % 2 === 0
    }
});

const acronyms = ['asap', 'byob', 'rsvp', 'diy'];

const abbrev = acronyms.map(function (word) { //returns each element in all caps with a . between each letter
    return word.toUpperCase().split('').join('.');
});

//arrow functions

// const square = (x) => { //parentheses could be left out here because there is only one parameter
//     return x * x;
// };

//refactoring square
// const square = n => (
//     n * n
// );

//refactoring square again
const square = n => n * n;

const isEven = (num) => {
    return num % 2 === 0;
};

//back to array callback methods

//find
let movies = [
    'The Fantastic Mr. Fox',
    'Mr. and Mrs. Smith',
    'Mrs. Doubtfire',
    'Mr. Deeds'
];

const movie = movies.find(movie => {
    return movie.includes('Mrs');
});

//filter
const odds = numbers.filter(n => n % 2 === 1); //adds odd numbers in the original array to a new array

//some and every
const words = ['dog', 'dig', 'log', 'bag', 'wag'];

const has3Letters = words.every(word => word.length === 3); //returns true

const allEndInG = words.every(word => { //also true
    const last = word.length - 1;
    return word[last] === 'g';
})

const allStartWithD = words.every(word => word[0] === 'd'); //false
const someStartWithD = words.some(word => word[0] === 'd'); //

//sort
const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

prices.sort(); //[12, 3000, 35.99, 400.5, 9500, 99.99]

const ascSort = prices.sort((a,b) => a - b); //sorts in ascending order
//const descSort = prices.sort((a,b) => b - a); //code for descending order

const numbs = [3, 4, 5, 6, 7];
const product = numbs.reduce((total, currentVal) => {
    return total * currentVal;
});

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrade = grades.reduce((max, currVal) => {
    return Math.max(max, currVal); //Math.max finds the larger of two numbers
});

//tallying
const votes = ['yes', 'yes', 'no', 'yes', 'yes', 'no', 'yes', 'yes',
    'yes', 'yes', 'yes', 'no', 'yes', 'yes', 'yes', 'no', 'no'];

const results = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {}); 

//default parameters
const greet = (person, greeting = 'Hi', punctuation = '!') => {
    console.log(`${greeting}, ${person}${punctuation}`)
};

//spread for function calls
function giveMeFour(a,b,c,d) {
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
    console.log('d', d);
}
const colors = ['red', 'orange', 'yellow', 'green'];

//giveMeFour(colors) would not work because the array is one value

giveMeFour(...colors); //the ellipsis breaks up the iterable into indvidual arguments

//strings are iterables, so this works on strings as well 
const iterable = 'goat';
giveMeFour(...iterable);