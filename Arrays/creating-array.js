// using array assignment 
const names = ['me', 'I', 'Hemana'];
console.log(names);   // (3) ['me', 'I', 'Hemana']


// Array constructor
// The Array() constructor creates Array objects.
// Array() can be called with or without new. Both create a new Array instance.
// A JavaScript array is initialized with the given elements
// except in the case where a single argument is passed to the Array constructor and that argument is a number Note that this special case only applies to JavaScript arrays created with the Array constructor, not array literals created with the square bracket syntax.
const slots = new Array(3); // or Array(3) same
console.log(slots); // (3) [empty × 3]
console.log(slots.length); // 3
console.log(slots[0]); // undefined

const fruits = Array('apple', 'banana', 'orange');
console.log(fruits); // (3) ['apple', 'banana', 'orange']

const numbers = Array(1, 2, 3, 4, 5);
console.log(numbers); // (5) [1, 2, 3, 4, 5]


// Array.of()
// The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
console.log(Array.of('yes', 1, 'dumb', true)); // (4) ['yes', 1, 'dumb', true]
console.log(Array.of()); // []
console.log(Array.of(3)); // [3] it doesnt consider it the array length

// split method - string -> array
const sentence = 'I love JS';
console.log(sentence.split()); // ['I love JS'] without any separator
console.log(sentence.split('')); // (9) ['I', ' ', 'l', 'o', 'v', 'e', ' ', 'J', 'S'], empty string as separator
console.log(sentence.split(" ")); // (3) ['I', 'love', 'JS'], space as separator