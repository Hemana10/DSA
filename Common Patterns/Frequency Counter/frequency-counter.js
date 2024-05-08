// same_naive (not the most efficient solution)

function sameNaive(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;

    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2); // indexOf O(n)
        if(correctIndex === -1) return false;
        arr2.splice(correctIndex, 1); // splice potentially O(n)
    }
    return true;
}

// console.log(sameNaive([1, 2, 3, 2], [9, 1, 4, 4]));

// TC = O(N * (N + N)) = O(N * (2N)) => O(N ^ 2) Quadratic time

// *************************************************************************************************

function sameRefactor(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1) { // O(N)
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for(let val of arr2) { // O(N)
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for(let key in arr1) { // O(N)
        if(!(key ** 2 in frequencyCounter2 )) return false;

        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true;
}

console.log(sameRefactor([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));

// TC = O(3N) => O(N)
// all operations used with objects are O(1)