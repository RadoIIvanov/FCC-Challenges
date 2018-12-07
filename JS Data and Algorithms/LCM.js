function smallestCommons(arr) {
    
    function GCD(a, b) {
        while (b !== 0) {
            let remainder = a % b;
            a = b;
            b = remainder;
        }
        return a;
    }

    let start = arr[0] < arr[1] ? arr[0] : arr[1];
    let end = arr[0] < arr[1] ? arr[1] : arr[0];

    let initialArr = [];
    for (let i = start; i <= end; ++i) {
        initialArr.push(i);
    }

    while (true) {

        let arrOfLCM = [];
        for (let i = 0; i < initialArr.length - 1; ++i) {
            arrOfLCM.push((initialArr[i]*initialArr[i+1])/GCD(initialArr[i+1],initialArr[i]));
        }
        if (arrOfLCM.length === 1) {
            return arrOfLCM[0];
        }
        initialArr = arrOfLCM;
    }
}
console.time();
console.log(smallestCommons([100,40]));
console.timeEnd();