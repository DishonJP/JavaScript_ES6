const readline = require('readline-sync');
const bank = require('./cashCounterBL');

const userName=readline.question("Enter your name : ");
const pat=new RegExp("^[a-zA-Z]+$");
pat.test(userName) ? bank.bank(userName) : console.log("Invalid input");