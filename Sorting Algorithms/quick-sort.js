// TC = O(n)
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start+1; i < arr.length; i++) {
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