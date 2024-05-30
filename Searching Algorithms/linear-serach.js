// linear search
// loop through, if index matches return index, else return -1
// TC = O(N)

function linearSearch(arr, item){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }

    return -1;
}

  
console.log(linearSearch([10, 15, 20, 25, 30], 15));