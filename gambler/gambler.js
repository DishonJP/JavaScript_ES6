const gambler=require('./gamblerBL');
const readline=require('readline-sync');

console.log("*************Gambler*************");

const userInput=readline.questionInt("Enter no of times the gambling should run : ");

let playerOne=10;
let playerTwo=10;

console.log(gambler(playerOne,playerTwo,userInput));
