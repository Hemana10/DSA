// merge sort 
// split up the array at mid recursively,sort it and merge it.
// left => 0,mid & right => mid.
// mid should never reach a posibility of 0, then it will recursively call the same array over and over again, the call stack will exceed.
// arr.length/2 not start and end.

// TC = O(2m + 2n) = O(2(m + n)) remove constants= O(n + m)
// Sc = O(n + m)
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}
// console.log(merge([1, 3, 5, 7, 9], [3, 4, 6, 8, 10]));

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([9, 5, 3, 1]));