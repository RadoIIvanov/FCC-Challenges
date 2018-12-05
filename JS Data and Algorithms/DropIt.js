function dropElements(arr, func) {
    let copiedArr = [...arr];
    for (let i = 0; i < copiedArr.length; ++i) {
        if (func(copiedArr[i]) === true) {
            return copiedArr.slice(i, copiedArr.length)
        }
    }
    return [];
}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));


//// iterate over the array and remove each element that when passed to the function returns false
//// do that until the functions returns true, if it never does return an empty array
/// when the function returns true => return the rest of the array