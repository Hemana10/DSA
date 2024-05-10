// TC = O(N ^ 2)

function sumNaive(arr) {
    for(let i = 0; i < arr.length; i++) { // O(N)
        for(let j = i+1; j < arr.length; j++) { // O(N)
            if(arr[i] + arr[j] === 0) return [arr[i], arr[j]];
        }
    }
}

// console.log(sumNaive([-4, -3, -2, -1, 0, 1, 2, 5])); // (2) [-2, 2]

// *************************************************************************************************

// TC = O(N)

function sumRefactor(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) { // O(N)
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumRefactor([-4, -3, -2, -1, 0, 1, 2, 3, 10])); // (2) [-3, 3]
