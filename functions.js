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

const triple = multiplyBy(3); //uses multiplyBy to make a function that triples a given number
const double = multiplyBy(2); //uses multiplyBy to make a function that doubles a given number

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
    alert('Hello, Window!')
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

const votingResults = votes.reduce((tally, val) => {
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {}); 

//default parameters
const greet = (person, greeting = 'Hi', punctuation = '!') => {
    console.log(`${greeting}, ${person}${punctuation}`)
};

//spread in function calls
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


//spread in array literals
const mammals = ['dachschund', 'bobcat', 'gerbil', 'fruit bat'];

const reptiles = ['leopard gecko', 'bearded dragon', 'cottonmouth'];

const amphibians = ['poison dart frog', 'blue tailed skink'];

//creates an array made up of the elements of reptiles and amphibians
//rather than creating an array with two elements that are both arrays
const coldBlooded = [...reptiles, ...amphibians]; 

//this works on strings as well
const alphabet = 'abcdefghijklmnopqrstuvwxyz'

console.log(alphabet.split('')); //adds each letter as an element in a new array

console.log([...alphabet]); //creates an array with the same elements as split

//spread in object literals
const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    family: 'Caninae',
    furry: true,
    legs: 3
};

//JS goes through canine first, then updates conflicting properties with the next object, feline
const catdog = {
    ...canine,
    ...feline
};

//objects can only be spread into another object, so this works even though the object is nested in an array
const test = [...'hello', {
    ...catdog
}];

//the arguments object
// function add() {
//     argsArray = [...arguments]; //arguments is only an array-like object, so it needs to be turned into an array to access array methods
//     return argsArray.reduce((total, currVal) => {
//         return total + currVal
//     })
// };
//arguments does not work in arrow functions


//the rest parameter
function add(...nums) { //nums is the name of the array that contains all arguments
    return nums.reduce((total, currVal) => {
        return total + currVal
    })
};

//the rest parameter collects all arguments that have not been matched with a parameter
function fullName (first, last, ...titles) {
    console.log('First: ', first)
    console.log('Last: ', last)
    console.log('Titles: ', titles)
};

//can be used with arrow functions!
const multiplication = (...nums) => (
    nums.reduce((total, currVal) => total * currVal)
);

//destructuring arrays
const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
];

//sets gold, silver, and bronze, equal to the first, second, and third elements of raceResults
const [gold, silver, bronze] = raceResults; 

//destructuring objects
const runner = {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya',
    title: 'Elder of the Order of the Golden Heart of Kenya'
};

const {first, last, time} = runner; //time is undefined

//will make a variable called nation based off the value found in country
const {country: nation} = runner;

//nested destructuring
const results = [{
      first: 'Eliud',
      last: 'Kipchoge',
      country: 'Kenya'
    }, 
    {
      first: 'Feyisa',
      last: 'Lilesa',
      country: 'Ethiopia'
    },
    {
      first: 'Galen',
      last: 'Rupp',
      country: 'United States'
    }
];

const [, {country}] = results; //the comma skips the first element
const [{first: goldWinner}] = results; //creates a variable goldWinner equal to 'Eliud'

//parameter destructuring
function print({first, last, title}) {
    console.log(`${first} ${last}, ${title}`);
};

const response = ['HTTP/1.1', '200 OK', 'application/json'];

function parseResponse([protocol, statusCode, contentType]) {
    console.log(`Status: ${statusCode}`);
};

//the 'this' keyword
const person = {
    first: 'John',
    last: 'Doe',
    fullName() {
        return `${this.first} ${this.last}`
    },
    printBio() {
        console.log(this); //references the window, not the object person
        const fullName = this.fullName();
        console.log(`${fullName} is a person!`);
        
    }
};

person.fullName(); //'John Doe'


//invocation context
const printBio = person.printBio; //scope of 'this' is the window

const annoyer = {
    phrases: ['cray cray', 'Totes!', 'YOLO!', 'Can\'t stop, won\'t stop'],
    pickPhrase() {
        const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },
    start() {
        this.timerId = setInterval(() => {//works because the 'this' within arrow functions refers to the parent function's 'this'
            console.log(this.pickPhrase())
        }, 3000)
    },
    stop() {
        clearInterval(this.timerId)
    }
};


function makeDeck() {
    
    const deck = [];

    for(let value of values.split(',')) {
        for (let suit of suits) {
            deck.push({value, suit})
        }
    }
    return deck;
};

function drawCard(deck) {
    return deck.pop();
};

const myDeck = {
    deck: [],
    drawnCards : [],
    suits: ['clubs', 'spades', 'hearts', 'diamonds'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck() {
        const {suits, values, deck} = this; //destructuring

        for(let value of values.split(',')) {
            for (let suit of suits) {
                deck.push({value, suit})
            }
        };
    },
    drawCard() {
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(numCards) {
        const cards = [];
        for (let i = 0; i < numCards; i++) {
            cards.push(this.drawCard());
        }
        return cards;
    },
    shuffle() { //fisher-yates shuffle
        const {deck} = this;
        //loop over array backwards
        for (let i = deck.length - 1; i > 0; i--) {
            //pick random index before current element
            let j = Math.floor(Math.random() * (i + 1));
            //swap
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
};
