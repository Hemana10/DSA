const swap = (arr, i, j) => (
    [arr[i], arr[j]] = [arr[j], arr[i]]
);


// TC =` O(n ^ 2), works better for almost sorted arrays, and live sorting of arrays
function insertionArray(arr) {

    console.log('initial arr', arr);

    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j;
        for(j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            // just trying to make one spot for the correct index, so move the variable to one space to the right, so at the actual the current val and be inserted.
            arr[j+1] = arr[j];
            console.log(arr);
        }
        // inserting at correct index
        arr[j+1] = currentVal;
        console.log(arr);
    }

    return arr;
}

console.log(insertionArray([2, 1, 9, 76, 4]));