// TC = O(log n)
// we keep halving the array so each time size gets reduced by half

function binarySearch(arr, item) {
    // add whatever parameters you deem necessary - good luck!

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (item < arr[mid]) {
            right = mid - 1;
        } else if (item > arr[mid]) {
            left = mid + 1;
        } else return mid;
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
