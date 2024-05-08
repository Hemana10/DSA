// the entire array will have a placeholder value 'undefined'
// on pushing values into the array pushes it after the undefined values, undefined is still a value that takes space
// js keeps upto date with the length of the array
// array in js is dyanmic, it grows and reduces as required
// null also holds a value
const vowels = new Array(10);
vowels[0] = ('a');
console.log(vowels); // (10) ['a', empty × 9]
console.log(vowels.length); // 10
vowels.push('e');
console.log(vowels); // (11) ['a', empty × 9, 'e']
console.log(vowels.length); // 11
vowels[10] = null;
console.log(vowels); // (11) ['a', empty × 9, null]
console.log(vowels.length); // 11
vowels.push('e');
console.log(vowels); // (12) ['a', empty × 9, null, 'e']
console.log(vowels.length); // 12





     