const readline = require('readline-sync');
const permute = require('./permuteStringBL');

const userInput = readline.question("Enter the string to permutate : ");

let pattern = new RegExp("^[A-Za-z]+$");

pattern.test(userInput) ? console.log(permute(userInput)) : console.log("Enter a string only in alphabets");