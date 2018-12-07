function sumFibs(num) {
    let arrOfFib = [];
    arrOfFib.push(1);
    arrOfFib.push(1);
    for (let i = 2 ; i < Infinity; ++i ) {
        arrOfFib[i] = arrOfFib[i-1] + arrOfFib[i-2];
        if (arrOfFib[i] >= num) {
            break;
        }
    }
    let total = 0;
    for (let i = 0; arrOfFib[i] <= num; ++i) {
        if (arrOfFib[i] % 2 !== 0) {
            total += arrOfFib[i];
        }
    }
    return total;
}

console.log(sumFibs(1000));

/// sum all the odd fibonnaci numbers less than num