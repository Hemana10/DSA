let instructor = {
    firstName: 'Kelly',
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4]
}

// object static methods

// Object.keys()
// TC = O(n)
console.log(Object.keys(instructor));
// [
//     "firstName",
//     "isInstructor",
//     "favoriteNumbers"
// ]

// Object.values()
// TC = O(n)
console.log(Object.values(instructor));
// [
//     "Kelly",
//     true,
//     [
//         1,
//         2,
//         3,
//         4
//     ]
// ]

// Object.entries()
// TC = O(n)
console.log(Object.entries(instructor));
// [
//     [
//         "firstName",
//         "Kelly"
//     ],
//     [
//         "isInstructor",
//         true
//     ],
//     [
//         "favoriteNumbers",
//         [
//             1,
//             2,
//             3,
//             4
//         ]
//     ]
// ]

// object prototype methods

// object.hasOwnProperty(property as string)
// TC = O(1)
console.log(instructor.hasOwnProperty('isInstructor')); // true