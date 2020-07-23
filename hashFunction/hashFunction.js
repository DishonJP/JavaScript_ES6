const fs = require('fs');
const hashFunction = require('./hashFunctionBL');

try {
    fs.readFile('hashFunctionNumber.txt', { encoding: "utf8" }, (err, data) => {
        if (err) {
            throw new Error(err)
        }
        hashFunction(data.split(','));
    })
} catch (error) {
    console.log(error);
}