// insertion sort
// outer loop is the pick a num, store it and find its position on the left side of the array, this will always keep left side sorted.
// inner loop is to go through elements before ith index until 0th index
// if val is lesser than any numner on left, move those numbers by one position to make space in the correct position.
// finally put the currentVal in the correct position.


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