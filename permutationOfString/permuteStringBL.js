module.exports = (userInput) => {
    const splitArray = userInput.split("")
    const output = [];

    try {
        const swapInPlace = (arrToSwap, indexA, indexB) => {
            const temp = arrToSwap[indexA];
            arrToSwap[indexA] = arrToSwap[indexB];
            arrToSwap[indexB] = temp;
        };

        const generate = (arrLength, array) => {
            if (arrLength === 1) {
                output.push(array.slice());
                return;
            }

            generate(arrLength - 1, array);

            for (let i = 0; i < arrLength - 1; i++) {
                if (arrLength % 2 === 0) {
                    swapInPlace(array, i, arrLength - 1);
                } else {
                    swapInPlace(array, 0, arrLength - 1);
                }

                generate(arrLength - 1, array);
            }
        };

        generate(splitArray.length, splitArray.slice());
    } catch (error) {
        console.log(error);
    }

    return output;
}