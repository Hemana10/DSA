// quick sort
// findpivot
// need to retain the initial pivot where it is so that it is still available to be  moved to the position it should be in.
// loop is used to moving everything based on the pivot position, anything that is smaller should go to the pivot position.
// later swap the small number at pivot position to have pivot at the correct position.
// quicksort
// sort the left and right of pivot recursively, by finding pivot for each side over & over again until left < right (base case)

// TC = O(n)
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start+1; i <= end; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;
}

// console.log(pivot([5, 8, 7, 4, 1, 9, 6, 3, 2]));

// TC = O(log n) decompositions(best & average case) & O(n)(worst case)
function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5]));

// So Overall - TC = O(n logn)(best & average case) & O(n * n)(worst case)