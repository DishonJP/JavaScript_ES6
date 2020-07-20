module.exports = (textArray, userInput) => {

    const sortedArray = textArray.sort();
    const binarySearch = (arr, left, right, x) => {
        console.log(`${left} : ${right}`);
        if (right >= left) {
            let mid = Math.round(left + (right - left) / 2);
            console.log(mid);

            if (arr[mid] === x)
                return arr[mid];

            if (arr[mid] > x)
                return binarySearch(arr, left, mid - 1, x);

            return binarySearch(arr, mid + 1, right, x);
        }
        return "Not Found";
    }
    return binarySearch(sortedArray, 0, sortedArray.length - 1, userInput)
}