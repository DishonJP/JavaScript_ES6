const readline = require("readline-sync");
const findHarmonic = require('./harmonicNumberBL')

const userInput = readline.questionInt("Enter a number to find the harmonic value : ");

console.log(findHarmonic(userInput));