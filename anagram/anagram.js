const readline = require('readline-sync');
const anagram = require('./anagramBL');

console.log("********Anagram of String*********");

const stringOne = readline.question("Enter first String : ");
const stringTwo = readline.question("Enter second String : ");

const pattern = new RegExp('^[A-Za-z]+$');

pattern.test(stringOne) && pattern.test(stringTwo) ? console.log(anagram(stringOne, stringTwo)) :
    console.log("invalid input");