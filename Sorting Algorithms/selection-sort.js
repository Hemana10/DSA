const swap = (arr, i, j) => (
    [arr[i], arr[j]] = [arr[j], arr[i]]
);

// TC =` O(n ^ 2) but a bit better we slide the window
// better than bubble sort we swap only after finding minindex

function selectionSort(arr) {

    let passthrough = 0;
    for(let i = 0; i < arr.length; i++) { // O(n)
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++) { // O(n)
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
            
            passthrough++;
            console.log(arr, passthrough);
        }
        if(minIndex !== i) swap(arr, minIndex, i);
    }

    return arr;
}

console.log(selectionSort([10, 4, 6, 9, 34, 52]));