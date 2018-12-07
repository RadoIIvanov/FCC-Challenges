function steamrollArray(arr) {
    // I'm a steamroller, baby
    if (typeof arr === "string" || typeof arr === "number") {
        return arr;
    }

    if (arr.length === 0 && arr instanceof Array) { ///// empty array
        return [];
    } 

    if (arr[0] === undefined && arr instanceof Object) { ///// empty object
        return {};
    }

    let firstElement = arr[0];
    let theRestOfArr = arr.slice(1, arr.length);
    
    return Array.prototype.concat(steamrollArray(firstElement), steamrollArray(theRestOfArr));
}

console.log(steamrollArray([1, {}, [3, [[4]]]]));