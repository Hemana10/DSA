// TC = O(n ^ 2)

function naiveSearch(long, short) {
    let count = 0;
    for(let i = 0; i < long.length; i++) { // O(n)
        for(let j = 0; j < short.length; j++) { // O(n) // even if substring is used that is 
            // also O(n)
            if(short[j] !== long[i+j]) break;
            if(j === short.length - 1) count++;
        }
    }

    return count;
}

console.log(naiveSearch('lorie loled', 'lo'));