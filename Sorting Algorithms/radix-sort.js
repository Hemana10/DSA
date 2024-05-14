// doing base 10 number, 1s place, 10s place, any other base user can mention
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    return String(num).length;
}

// console.log(digitCount(423));

function mostDigits(nums) {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// console.log(mostDigits([1, 23, 543564, 765, 8932]));

// TC = O(nk) = k no of digits, n length of array
// the way digits stored in computer is in log n, so k can be log n
// SC = O(n + k)
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);

    for(let k = 0; k < maxDigitCount; k++) { // need to loop through to get all digit sizes to get into correct order
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets);
        nums = [].concat(...digitBuckets); // concats all inner arrays together
        console.log(nums);
    }
    return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));