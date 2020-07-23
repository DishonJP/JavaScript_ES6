const HashTable = require('./HashTable');

const hashFunction = (numberArray) => {
    console.log(numberArray);

    const hashTable = new HashTable();

    for (const iterator of numberArray) {
        hashTable.set(iterator)
    }
    for (const key in hashTable.bucket) {
        console.log(`Element present in index ${key} are ${hashTable.bucket[key]}`);
    }
}

module.exports = hashFunction;