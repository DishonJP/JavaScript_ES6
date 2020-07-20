module.exports = (userInput) => {
    let harmonic = 1;
    for (let i = 2; i < userInput; i++) {
        harmonic += 1 / i;
    }
    return harmonic
}