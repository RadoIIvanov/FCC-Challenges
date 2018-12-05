
const recursiveFactorial = function (n) {

    if ( n <= 1) {
        return 1;
    }

    return n * recursiveFactorial (n - 1)

}
//// Large problem - take a large parameter and return the result of the multiplication of all the positive numbers up to this number (including)

//// Base case - when the parameter is <= 1 => return 1
//// Base case - when parameter is 2 => return the parameter value and ask for help from the Base case

//// The relationship between the results of Base and Base + 1 is determined by the structure of the output we need to produce - in this case
//// we are return a result of multiplication of numbers, so we use the * operator

const iterativeFactorial = function (n) {

    let total = 1;

    for (let i = 1; i <= n ; ++i) {
        total *= i;
    }
    return total;
}
console.log(iterativeFactorial(1));

/// Since the components of the multiplication are consecutive numbers, there is no uncertainty or logic to build(the parameters are directly the building blocks, no need to modify them)
/// so you just loop to get consecutive a counter for consecutive numbers and multiply