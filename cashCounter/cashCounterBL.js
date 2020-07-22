const readline = require('readline-sync');
const pattern = new RegExp("(1|2|3)");

const Queue = require('./Queue');
const bank = (name) => {
    const queue = new Queue();
    queue.enQueue(name)
    while (!queue.isEmpty()) {
        const userStatus = readline.questionInt("Do you like withdraw(1) or Deposit(2) or exit(3) : ");
        if (pattern.test(userStatus)) {
            switch (userStatus) {
                case 1:
                    const amount = readline.questionInt(`Hi ${queue.getUser()} , enter the amount to withdraw : `);
                    console.log(`${queue.withdraw(amount)} : balance ${queue.getBalance()}`);
                    break;
                case 2:
                    const depoAmount = readline.questionInt(`Hi ${queue.getUser()},Enter the amount to deposit : `);
                    console.log(`${queue.deposit(depoAmount)} : balance ${queue.getBalance()}`);
                    break;
                default:
                    console.log("transaction cancelled");
                    queue.deQueue()
                    break;
            }
        }

    }
}


module.exports = { bank }