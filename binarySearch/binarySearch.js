const fs = require('fs');
const binary = require('./binarySearchBL');
const readline = require('readline-sync')

const userInput = readline.question("Enter the word to search : ");

try {
    fs.readFile('binarySearchText.txt', { encoding: 'utf8' }, (err, data) => {
        if (err) {
            throw new Error(err)
        }
        console.log(binary(data.split(','), userInput));
    });
} catch (error) {
    console.log(error);
}

