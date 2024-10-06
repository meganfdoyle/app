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
}