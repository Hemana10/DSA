// binary search
// define left & right, and base case L <= R
// calc mid for each L & R
// return mid or return -1

function binarySearch(arr, item) {

    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(item > arr[mid]) left = mid+1;
        else if(item < arr[mid]) right = mid-1;
        else return mid;
    }

    return -1;
}

console.log(binarySearch([10, 15, 20, 25, 30], 20));