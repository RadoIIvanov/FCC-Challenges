function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    for (let i = 0; i < collection.length; ++i) {
        let boolean = true;
        for (let key in source) {
            if (!(collection[i].hasOwnProperty(key) && collection[i][key] === source[key])) {
                boolean = false;
                break;
            }
        }
        if (boolean) {
            arr.push(collection[i]);   
        }  
    }
    // Only change code above this line
    return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));