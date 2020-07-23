const readline = require('readline-sync')

const pattern = new RegExp("(rice|wheat|pulses)");
const dataManagement = (data) => {
    let total = 0;
    let productName = [];
    data.details.forEach(el => productName.push(el.name))
    let userResponce = 1;
    while (userResponce !== 0) {
        const userInput = readline.question(`we got ${productName} in our shop : `);
        if (!pattern.test(userInput.trim().toLowerCase())) {
            console.log("we dont sell those things here");
            continue;
        }
        const userValue = readline.questionInt(`how much kg of ${userInput} do you need : `)

        const product = data.details.find(prod => prod.name === userInput);
        total += product.price * userValue;
        userResponce = readline.questionInt("if you like to buy anyother product press 1 else press 0 :")
    }
    console.log(`final total : ${JSON.stringify(total)} Rs`);
}

module.exports = dataManagement;