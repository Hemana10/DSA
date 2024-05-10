// TC = O(N)

function linearSearch(arr, item){
    // add whatever parameters you deem necessary - good luck!
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }

    return -1;
}

  
console.log(linearSearch([10, 15, 20, 25, 30], 15));