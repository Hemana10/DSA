const array = [10, 20, 30, 54];

// square bracket notation
// T O(1)
// console.log(array[1]);

// using for loops
// T O(n) = O(n) -> size of the array almost the same for all loops
// for loop
// can we used to traverse from end of the array
for(let i = 0; i < array.length; i++) {
    // console.log(array[i]);
}

// for...each loop
// has index available which is handy, and can have our own this value.
// better to use in case of higher order fns
// works only for arrays
// performance issues, cannout break out of the loop, it will always iterate through the entire array, since it will call the callback function with every ip even if we return from it.
// internally makes use of for loop to access every element
array.forEach((val, index) => {
    // console.log(val)
})

// for of and for in are the best to use
// Can loop through pretty much everything not just arrays -> enumerable or not ?
// can break out or continue from the loop
// no index
// readable
// for...of loop
for(val of array) {
    // console.log(val)
}

// for...in loop -> to get the index
for(key in array) {
    // console.log(key);
}

// map
// can we used for accessing array, but its main purpose is to transform the array based on original array and return a new array
// so occupies more space
// internally will map every element with the cb fn.
const newArr = array.map(ele => {
    // console.log(ele);
});
// console.log(newArr);

// using destructuring
// we can destructur and it will assign variable based on index
// this is O(1)
let [ first, ,second ] = array;
// console.log(first);
// console.log(second);

// using spread operator will lead to O(n)
[first, ...second] = array;
console.log(first);
console.log(second);