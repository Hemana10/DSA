// using frequency counter pattern - my solution 
// TC = O(3N) => O(N)
function validAnagram(str1, str2) {

    if(str1.length === 0 && str2.length === 0) return true;

    if(str1.length !== str2.length) return false;

    let frequencyCounter1 = {}; // cant declare 2 variables together
    let frequencyCounter2 = {};

    for(let val of str1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for(let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    // console.log(frequencyCounter1);
    // console.log(frequencyCounter2);

    for(let key in frequencyCounter2) { 
        // 'in' operator used within obj gives boolean value, with ordered structures we need to use 'in' in combination with for to loop over keys
        if((!(key in frequencyCounter1)) || frequencyCounter2[key] !== frequencyCounter1[key]) return false;
    }

    return true;
}

// console.log(validAnagram('', ''));
// console.log(validAnagram('aaz', 'zza'));
// console.log(validAnagram('anagram', 'nagaram'));
// console.log(validAnagram('rat', 'car'));
// console.log(validAnagram('awesome', 'awesom'));
// console.log(validAnagram('qwerty', 'qeywrt'));
// console.log(validAnagram('texttwisttime', 'timetwisttext'));

// *************************************************************************************************

// Refactor solution
// TC = O(2N) => O(N)
function validAnagramRefactor(str1, str2) {
    if(str1.length !== str2.length) return false;

    let lookup = {};

    for(let val of str1) { // O(N)
        lookup[val] = (lookup[val] || 0) + 1;
    }

    for(let val in str2) { // O(N)

        if(!(val in str1)) return false;
        else {
            lookup[val]--;
        }
    }

    return true;
}


console.log(validAnagramRefactor('', ''));
console.log(validAnagramRefactor('aaz', 'zza'));
console.log(validAnagramRefactor('anagram', 'nagaram'));
console.log(validAnagramRefactor('rat', 'car'));
console.log(validAnagramRefactor('awesome', 'awesom'));
console.log(validAnagramRefactor('qwerty', 'qeywrt'));
console.log(validAnagramRefactor('texttwisttime', 'timetwisttext'));
