module.exports = (stringOne, stringTwo) => {

    if (stringOne.length !== stringTwo.length) {
        return "Not a Anagram"
    }

    const splitedStrOne = stringOne.split("");
    const splitedStrTwo = stringTwo.split("");

    let count = 0;

    try {
        for (const char of splitedStrOne) {
            for (const key in splitedStrTwo) {
                if (splitedStrTwo[key] === char) {
                    splitedStrTwo[key] = null;
                    count++;
                }
            }
        }
    } catch (error) {
        console.log(error);
    }

    return count === stringOne.length ? "Strings are Anagram" : "String are not anagram";
}