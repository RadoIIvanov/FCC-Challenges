const createListIterative = function (arr) {

    let obj = {};
    for (let i = arr.length - 1; i >= 0  ; --i) {
        
        obj.value = arr[i];
        obj.rest = null;
    }

}