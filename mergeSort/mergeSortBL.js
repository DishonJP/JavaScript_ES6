module.exports = (numberArray) => {

    const merge = (array, left, mid, right) => {
        console.log(`${array} : ${left} : ${mid} : ${right}`);
        let leftArraySize = mid - left + 1;
        let rightArraySize = right - mid;

        let leftArray = new Array(leftArraySize);
        let rightArray = new Array(rightArraySize);

        for (let i = 0; i < leftArraySize; ++i) {
            leftArray[i] = array[left + i];
        }

        for (let j = 0; j < rightArraySize; ++j) {
            rightArray[j] = array[mid + 1 + j];
        }

        let i = 0, j = 0;

        let k = left;
        while (i < leftArraySize && j < rightArraySize) {
            if (leftArray[i] <= rightArray[j]) {
                array[k] = leftArray[i];
                i++;
            }
            else {
                array[k] = rightArray[j];
                j++;
            }
            k++;
        }

        while (i < leftArraySize) {
            array[k] = leftArray[i];
            i++;
            k++;
        }
        while (j < rightArraySize) {
            array[k] = rightArray[j];
            j++;
            k++;
        }
    }

    const sort = (array, left, right) => {
        if (left < right) {

            let mid = Math.floor((left + right) / 2);

            sort(array, left, mid);

            sort(array, mid + 1, right);

            merge(array, left, mid, right);
        }
    }

    sort(numberArray, 0, numberArray.length - 1);
    
    return numberArray
}