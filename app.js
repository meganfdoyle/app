//conditionals
let rating = 2;

if (rating === 3) {
    console.log("You are a superstar! :D");
} 
else if (rating === 2) {
    console.log("Meets expectations. :)");
}
else if (rating === 1) {
    console.log("Needs improvement. :(");
}
else {
    console.log("Invalid rating. Enter a rating of 1, 2, or 3.");
};

//example 2

let num = 37;

if (num % 2 !== 0) {
    console.log("Odd number");
};

//operator precedence (! > && > ||)
let x = 7;

let expression1 = x == 7 || x === 3 && x > 10; //evaluates to true because && takes precedence over ||

let expression2 = (x == 7 || x === 3) && x > 10; //evaluates to false

if (expression1) {
    console.log("Expression1 is true!");
};

if (!expression2) {
    console.log("Expression2 is false!");
};

//switch statements are used when you are considering one value and checking it against multiple potential values
let day = 3;

switch (day) {
    case 1: 
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
};

//example 2
let emoji = "happy face";

switch (emoji) {
    case "sad face":
    case "happy face": //cases can be stacked like this if the output is the same
        console.log("yellow");
        break;
    case "brain":
    case "lungs":
        console.log("pink");
        break;
    case "kiwi":
        console.log("green");
        break;
    default:
        console.log("Please enter a different emoji");
};

//ternary operators
let number = 7;
number === 7 ? console.log("lucky") : console.log("bad luck");

//example 2
let userState = 'online';
let color = userState === "offline" ? "red" : "green";
console.log(color);

//for loops
for (let i = 1; i <= 10; i++) { //runs 10 times
    console.log(`This loop has run ${i} time(s).`); 
};

//iterate over an array
const animals = ["lions", "tigers", "bears"];

for (let i = 0; i < animals.length; i++) { //logs each index of animals
    console.log(i, animals[i]);
};

//iterate over an object
const myStudents = [
    {
        firstName: "Samuel",
        grade: 86
    },
    {
        firstName: "Tabitha",
        grade: 98
    },
    {
        firstName: "Utiver",
        grade: 100
    }
];

let total = 0; //initializes a variable that will contain the sum of all students' grades

for (let i = 0; i < myStudents.length; i++){ //Prints each student's name and grade
    let student = myStudents[i];
    console.log(`${student.firstName} scored ${student.grade}`);
    total += student.grade;
};

console.log(`The class average is ${total/myStudents.length}.`);

//for...of loops are great for iterating over iterables

let animalList = ["frog", "sheep", "bat", "crow", "bass", "lizard"];

for(let animal of animalList){ //logs every element in the array
    console.log(animal);
}

const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

//using a regular for loop
for (let i = 0; i < magicSquare.length; i++){
    let row = magicSquare[i];
    let sum = 0;
    for (let j = 0; j < row.length; j++){
        sum += row[j];
    }
    console.log(`${row} summed to ${sum}`);
}

//using a for of loop
for (let row of magicSquare){
    let sum = 0;
    for(let num of row){
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);
}

//using a for of loop on an object
const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8,
    "In Bruges": 9,
    Amadeus: 10
};

for (let movie of Object.keys(movieReviews)){
    console.log(movie, movieReviews[movie]);
}

//using a for in loop on an object
const citizen = {
    name: "John Doe",
    occupation: "Unknown",
    status: "Deceased",
    knownRelatives: "None"
}

for (let k in citizen){
    console.log(`${k}: ${citizen[k]}`);
};



//Guessing Game
let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid maximum number!"));
}

const target = Math.floor(Math.random() * maximum) + 1;

let guess = prompt('Guess the number!');
let attempts = 1;

while (guess !== target) {
    attempts++;
    if (guess < target) {
        guess = parseInt(prompt('Too low. Guess again:'));
    } else {
        guess = parseInt(prompt('Too high. Guess again:'));
    };
};

console.log(`You got it! It took ${attempts} tries.`)

