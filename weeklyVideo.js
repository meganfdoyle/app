async function sayHi() {
    return 'Hi!';
};

sayHi().then((val) => {
    console.log('Promise fulfilled with: ', val)
})

async function getRandPokemon() {
    const rand = Math.floor(Math.random() * 1025 + 1);

    const prom = axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}`);

    const result = await prom;

    console.log(result.data.name);
};

getRandPokemon();


// async function get3Pokemon() {
//     const rand1 = Math.floor(Math.random() * 1025 + 1);
    
//     const prom1 = axios.get(`https://pokeapi.co/api/v2/pokemon/1`);
    
//     const results = await prom1;

//     console.log(results.data.name)
//     // printPokemon(results);
// };

// function printPokemon(results) {
//     // for (let pokemon of results) {
//     //     console.log(pokemon.data.name);
//     // };
//     console.log(results.data.name);
// };

// get3Pokemon();
/*
classList
 - Allows you to change an element's class
 - toggle(), add(), remove(), replace(old, new)
 */

//  const taskList = document.querySelectorAll('#taskList .task');

//  const taskBtns = document.querySelectorAll('ul button');
 
 
//  for (let i = 0; i < taskList.length; i++) {
//      //specifies the button to the left of the current li    
//      taskBtns[i].addEventListener('click', function () { 
//          //toggles the class 'done' when the button to the right of the current li is clicked
//          taskList[i].classList.toggle('done');
//      });
//  };



const apparition = '                            ⢀⣠⣤⣶⣶⣶⣶⣶⣶⣤⣄⣀' +
'\n                        ⢀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄'+
'\n                     ⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄'+
'\n                    ⣰⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆'+
'\n                  ⣰⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄'+
'\n                ⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⢿⣿⣿⣿⣿⡟⠉⠛⢿⣿⣿⣿⣷'+
'\n               ⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠈⣽⣿⣿⣷⡀  ⠀⣽⣿⣿⣿'+
'\n              ⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠙⠁ ⠙⣿⣿⣦⣼⣿⣿⣿'+
'\n          ⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⡿'+
'\n⠠⣶⣤⣤⣤⣄⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⣀⣴⣿⣿⣿⣿⣿⣿⣿⠃'+
'\n⠈⢹⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟'+
'\n   ⠉⠉⠉⠁⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁'+
'\n           ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧'+
'\n           ⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄'+
'\n           ⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠻⣿⣿⣿⣿⣿⣿⣶⣶⣤⣤⣶⡶⠃'+
'\n           ⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠉⠛⠿⠿⠿⠿⠿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠴⠜⠊⠛⠒'+
'\n             ⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡔⠁'+
'\n             ⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣴⡟'+
'\n               ⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣾⠇'+
'\n                 ⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣵⣿⠇'+
'\n                   ⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣾⣿⣿⠏'+
'\n                     ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣤⣀⣀⣀⣀⣀⡀⠀⣀⣠⣼⣿⣿⣿⣿⠋'+
'\n                        ⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁'+
'\n                          ⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁'+
'\n                             ⠈⠙⠛⢿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠋'+
'\n                                    ⠉⠛⠛⠿⠿⠿⠿⠿⠿⠿⠿⠿⠛⠛⠉'

const ghost =  {
    type: 'spectre',
    scare: function scare() {
        console.log('BOOOOOOOOOOO!!!')
    },
    haunt() {
        message = 'Abandon hope, all ye who enter here';
        return message.toUpperCase();
    },
    reason() {
        return ' ℑ\'𝔪 𝔞𝔠𝔱𝔲𝔞𝔩𝔩𝔶 𝔞 𝔫𝔦𝔠𝔢 𝔤𝔲𝔶 ';
    },
    reveal() {
        console.log(apparition);
    },
    summon(numGhosts) {
        return function(speech) {
            for (i = 0; i < numGhosts; i++) {
                console.log(speech);
            }
        }
    }    
};

const ghostCrowd = ghost.summon(3);


//for loop
// let anadrome = 'deliver';
// let reverse = '';

// for (let i = anadrome.length - 1; i >= 0; i--) {
//     reverse = reverse + anadrome[i];
//     console.log(reverse);
// };





//while loop
// let i = 1;
// const divisibleBy5And3 = [];

// while (i < 100) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         divisibleBy5And3.push(i);
//         console.log(`${i} is divisible by both 3 and 5!`);
//     } else {
//         console.log(i);
//     }
//     i++;
// };

// console.log(divisibleBy5And3);



