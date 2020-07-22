const Person = require('./Person')

class Queue {
    constructor() {
        this.queue = [];
    }
    enQueue(data) {
        this.queue.push(new Person(data, 10000));
    }
    deQueue() {
        if (this.isEmpty()) {
            console.log('Queue underflow');
        } else {
            return this.queue.shift();
        }
    }
    isEmpty() {
        return this.queue.length === 0;
    }

    getUser() {
        return this.queue[0].name;
    }

    withdraw(amount) {
        if (this.queue[0].amount > amount) {
            this.queue[0] = {
                ...this.queue[0],
                amount: this.queue[0].amount - amount
            }
            return "withdraw successful"
        }
        return "insufficient balance"
    }

    deposit(amount) {
        this.queue[0] = {
            ...this.queue[0],
            amount: this.queue[0].amount + amount
        }
        return "Deposit successful"
    }

    getBalance() {
        return this.queue[0].amount
    }
}

module.exports = Queue