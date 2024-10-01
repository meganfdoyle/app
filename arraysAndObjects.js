//arrays


//array indices
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
console.log(colors[0][2]); //returns the character at index of 2 of the item at index 0

//modifying arrays
let shoppingList = ["oatmeal", "milk", "frozen breakfast sandwiches"];

shoppingList[1] = "whole milk"; //changes the item at index 1 to "whole milk"

shoppingList[shoppingList.length] = "potatoes"; //annoying way to add an item to the end of the list

//array methods
shoppingList.push("eggs"); //adds an item to the end of an array and returns the new length

shoppingList.pop(); //removes the last item in an array and returns that item

shoppingList.unshift("apples"); //adds an item to the beginning of an array and returns the new length

shoppingList.shift(); //removes an item from the beginning and returns that item

console.log(shoppingList);

//slice
let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];

let swimmers = animals.slice(0,3);

let mammals = animals.slice(2,4);

let quadruped = animals.slice(-3);

animals.slice(); //just makes a copy of the array

//const with arrays
const groceries = ["coconut milk", "curry paste", "peas", "potatoes"];

groceries.pop(); //allowed because you're not altering the reference to the array

/* 
the below code would not work because the reference to the array cannot be altered

groceries = ["coconut milk", "curry paste", "peas"]; 
*/


