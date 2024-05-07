let colors = ['red', 'blue', 'white'];

// ********************************************************************

// deleting at the end of the array
// TC = O(1)
// console.log(colors.pop()); // returns pop value - white
// console.log(colors); // (2) ['red', 'blue']
 
// ********************************************************************
colors = ['red', 'blue', 'white'];

// deleting at the beginning of the array
// TC = O(n)
// everything needs to get shifted to fill the initial void spot

for(let i = 0; i < colors.length - 1; i++) {
    colors[i] = colors[i+1];
}
colors.length = colors.length - 1;
// console.log(colors);

// ********************************************************************
colors = ['red', 'blue', 'white'];

// deleting at the given index of the array
// TC = O(n)
// This shift of elements takes 𝑂(𝐾) time where 𝐾 is the number of elements to the right of the given index. Since potentially K=N, we say that the time complexity of this operation is also 𝑂(𝑁)O(N).

let deleteIndex = 0;

for(let i = deleteIndex; i < colors.length - 1; i++) {
    colors[i] = colors[i+1];
}
colors.length = colors.length - 1;
// console.log(colors);
