// bubble sort
// bubble highest value to top each inner loop by moving(swapping) any found higher value
// outer loop starts from end of array, each time the end of array would be sorted, so no need to run inner loop till that point
// keep noswaps flag and breakthrough from array when not neccessary

const swap = (arr, i, j) => (
    [arr[i], arr[j]] = [arr[j], arr[i]]
);

// Naive Solution
// TC = O(n ^ 2)
function bubbleSortNaive(arr) {

    // algo is to pass through the n * n to get all the items to where they need to be
    // so array of length 4, 1st pass through in inner loop will sort 1 item
    // there are still 3 items that need to be sorted, so we need to pass through 3 more times
    // so n*n times
    for(let i = 0; i < arr.length; i++) { // O(n)
        for(let j = 0; j < arr.length; j++) { // O(n)
            if(arr[j+1] < arr[j]) {
                swap(arr, j, j+1);
            }
        }
    }
}

// console.log(bubbleSort([10, 34, 6, 9, 4, 52]));

// *************************************************************************************************

// My Solution
// TC = O(n ^ 2), a bit better, inner loop doesnt go through entire array again

function bubbleSort(arr) {

    let passthrough = 0;

    for(let i = arr.length; i >= 0; i--) { // O(n)
        for(let j = 0; j < i - 1; j++) { // O(n) // kind of optimized, not going through already sorted item
            if(arr[j+1] < arr[j]) {
                swap(arr, j, j+1);
            }

            passthrough++;
            console.log(arr, passthrough);
        }
    }

    return arr;
}

console.log(bubbleSort([10, 4, 6, 9, 34, 52]));

// *************************************************************************************************

// Optimized no swaps
// algo is => if it didnt swap anything in the last pass through then it is already sorted, so it wont swap anything next time, if thats the case, and we see noswaps not becoming false then we can just break out of the outer loop
// TC => O(n ^ 2), depends on how sorted the array is, bit better

console.log('no swaps optimized');

function bubbleSortNoSwaps(arr) {

    let passthrough = 0;

    for(let i = arr.length; i >= 0; i--) { // O(n)
        let noSwaps = true;
        for(let j = 0; j < i - 1; j++) { // O(n)
            if(arr[j+1] < arr[j]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }

            passthrough++;
            console.log(arr, passthrough);
        }
        if(noSwaps) break;
    }

    return arr;
}

console.log(bubbleSortNoSwaps([10, 4, 6, 9, 34, 52]));