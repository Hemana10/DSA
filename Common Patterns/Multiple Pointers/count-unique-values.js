// TC = O(N)

function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    
    let i = 0;
    let j = i+1;
    
    while(j < arr.length && i < j) { // O(N)
        if(arr[i] === arr[j]) {
            j++; // incrementing here
        } else {
            i++;
            arr[i] = arr[j];
            j++;  // incrementing here so incrementing in each iteration so instead use for loop
        }
    }
    
    return i === 0 ? i : ++i;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2

// *************************************************************************************************
// Refactored code with better readability

function countUniqueValuesRefactor(arr){
    if(arr.length === 0) return 0;

    let i = 0;

    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i+1;
}

console.log(countUniqueValuesRefactor([1, 1, 1, 2, 3, 3, 4, 5, 6, 6, 7])); // 7
