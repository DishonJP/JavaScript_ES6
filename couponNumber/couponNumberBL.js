module.exports = (randomNumber) => {
    let couponNumber = new Set();

    while (true) {
        let generateRandom = Math.floor(Math.random() * 100);
        if (generateRandom === randomNumber) {
            break;
        }
        couponNumber.add(generateRandom);
    }
    return `Coupon number was found at ${couponNumber.size} turn`;
}