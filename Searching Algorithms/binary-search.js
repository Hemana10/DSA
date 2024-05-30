// binary search
// define left & right, and base case L <= R
// calc mid for each L & R
// return mid or return -1

// TC = O(log n)
// we keep halving the array so each time size gets reduced by half

function binarySearch(arr, item) {

    let left = 0;
    let right = arr.length - 1;
    console.log('left', left);
    console.log('right', right);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        console.log('mid', mid);
        if (item < arr[mid]) {
            right = mid - 1;
        } else if (item > arr[mid]) {
            left = mid + 1;
        } else {
            console.log('left', left);
            console.log('right', right);
            return mid;
        }
        console.log('left', left);
        console.log('right', right);
    }

    return -1;
}

console.log([1, 2, 3, 4, 5]);
console.log(binarySearch([1, 2, 3, 4, 5], 0));
