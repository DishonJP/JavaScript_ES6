const coupon = require('./couponNumberBL');
const readline = require('readline-sync');

console.log("************CouponNumber************");

const randomNumber = readline.questionInt("Enter a number between 1-100 : ")

randomNumber > 0 && randomNumber <= 100 ? console.log(coupon(randomNumber)) : console.log("invalid");