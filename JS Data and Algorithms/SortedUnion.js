function uniteUnique(...arr) {
    let newArrayToReturn = [];

    for (let i = 0; i < arr.length; ++i) {
        let lengthOfSubArray = arr[i].length;
        for (let j = 0; j < lengthOfSubArray; ++j) {
            if (!newArrayToReturn.includes(arr[i][j])) {
                newArrayToReturn.push(arr[i][j]);
            }
        }
    }
    return newArrayToReturn;
}

console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));

/// 1. function that takes 2 or more arrays as inputs
/// 2. returns an array of unique values in the original order provided