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
}

//example 2

let num = 37;

if (num % 2 !== 0) {
    console.log("Odd number");
}

//operator precedence (! > && > ||)
let x = 7;

let expression1 = x == 7 || x === 3 && x > 10; //evaluates to true because && takes precedence over ||

let expression2 = (x == 7 || x === 3) && x > 10; //evaluates to false

if (expression1) {
    console.log("Expression1 is true!");
}

if (!expression2) {
    console.log("Expression2 is false!");
}

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
}

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
        console.log("green")
        break;
    default:
        console.log("Please enter a different emoji");
}

//ternary operators
let number = 7;
number === 7 ? console.log("lucky") : console.log("bad luck");

//example 2
let userState = 'online';
let color = userState === "offline" ? "red" : "green";
console.log(color);