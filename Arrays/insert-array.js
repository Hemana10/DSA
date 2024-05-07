let alphas = ['a', 'e', 'i', 'o', 'b'];

// ********************************************************************

// inserting at the begining of the array - O(1)
// to insert at the end of the array
alphas[alphas.length - 1] = 'u';
// console.log(alphas); // (5) ['a', 'e', 'i', 'o', 'u']
// push is used to push to the end of the array, after the last ele
alphas.push('k');
// console.log(alphas); // (6) ['a', 'e', 'i', 'o', 'u', 'k']

// ********************************************************************

// inserting at the start of the array - O(n)
// T O(n)

for(let i = alphas.length; i >= 0; i--) {
    alphas[i] = alphas[i-1];
}
alphas[0] = 'f';
// console.log(alphas); // ['f', 'a', 'e', 'i', 'o', 'u', 'k']

// built-in methods

// unshift - The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
// returns -> new length of array
// params -> unshift(element1, element2, /* …, */ elementN)
// can be used for object items as well
alphas.unshift('h')
// console.log(alphas);

// unshift polyfill - O(n + m) => O(n), m=>new elements length
Array.prototype.myunshift = function(...args) {
    // shifting
    for(let i = this.length - 1; i >= 0; i--) {
        this[i + args.length] = this[i];
    }

    // inserting at begining
    for(let i = 0; i < args.length; i++) {
        this[i] = args[i];
    }
}

alphas.myunshift(1, 2, 3);
// console.log(alphas); // (11) [1, 2, 3, 'h', 'f', 'a', 'e', 'i', 'o', 'u', 'k']
alphas.myunshift([4, 5], [6, 7]);
// console.log(alphas); // (11) [[4, 5], [6, 7], 1, 2, 3, 'h', 'f', 'a', 'e', 'i', 'o', 'u', 'k']

// ********************************************************************

// inseerting at a particular index - O(n + m) => O(n), m=>new elements length
alphas = ['a', 'e', 'i', 'o', 'u'];

Array.prototype.insertAtIndex = function(index, ...args) {
    for(let i = alphas.length - 1; i >= index-1; i--) {
       this[i + args.length] = this[i];
    }

    for(let i = index - 1, j = 0; j < args.length; i++, j++) {
        this[i] = args[j];
    }
}

alphas.insertAtIndex(2, 'm', 'm', 'm');
// console.log(alphas); // (8) ['a', 'm', 'm', 'm', 'e', 'i', 'o', 'u']

// built-in methods

// splice - The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// params - splice(start, deleteCount, item1, item2, /* …, */ itemN)
// return - An array containing the deleted elements.
// start - if only start given then all elements inclusive of the index will be deleted
alphas = ['a', 'e', 'i', 'o', 'u'];
alphas.splice(2); // returns ['i', 'o', 'u']
// console.log(alphas); // ['a', 'e']

// start, deletecount - if deletecount is mentioned then inclusive of the start index, only that many items will be deleted
alphas = ['a', 'e', 'i', 'o', 'u'];
alphas.splice(2, 1); // ['i']
// console.log(alphas); // ['a', 'e', 'o', 'u']

// start, deletecount, items.. - items inclusive of start index for the delete count will be deleted, and items will be inserted starting from start index
alphas = ['a', 'e', 'i', 'o', 'u'];
alphas.splice(2, 0, 'b', 'c'); // returns []
// console.log(alphas); // ['a', 'e', 'b', 'c', 'i', 'o', 'u']

alphas.splice(2, 2, 'k', 'r'); // returns ['b', 'c']
// console.log(alphas); // ['a', 'e', 'k', 'r', 'i', 'o', 'u']

// splice polyfill -  O(3n) => O(n), m=>new elements length
Array.prototype.mySplice = function(...args) {

    let returnResult = [];
    let newArray = [];
    let start, deleteCount;

    // do nothing if no args passed
    if(args.length === 0) return returnResult;

    // start
    start = args[0];
    // if start is out of index
    if (start >= this.length) return returnResult;
    // if start -ve index
    if (start < 0) start = this.length + start;

    // delete
    // if no deleteCount, calc it
    if(args.length === 1) deleteCount = this.length - start;
    // if 2 args provided
    if(args.length >= 2) {
        deleteCount = args[1];
        // if deleteCount more than the items present after start index, then make deletecount to be only the number of elements present
        if(deleteCount > this.length - start) {
            deleteCount = this.length - start
        }
    }

    for(let i = 0; i < deleteCount; i++) {
        returnResult.push(this[start + i]);
        this[start + i] = undefined;
    }

    if(args.length > 2) {
        for(let i = 2; i < args.length; i++) {
            this[start + i - 2] = args[i];
        }
    }

    if(deleteCount < this.length - start) {
        for(let i = 0; i < this.length; i++) {
            if(this[i] === undefined && i+1 < this.length) {
                let j = i+1;
                [this[i], this[j]] = [this[j], this[i]];

            }
        }
    }
    
    this.length = this.length - deleteCount;
    return returnResult;
}

// only start test
alphas = ['a', 'e', 'i', 'o', 'u'];
// console.log(alphas.mySplice(2));
// console.log(alphas);

// delete test
// console.log(alphas.mySplice(2, 2));
// console.log(alphas);

// insert items
console.log(alphas.mySplice(2, 1, 'b', 'c'));
console.log(alphas);

