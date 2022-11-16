// factorial function with for loop
function getFactorial (num) {
    let factCount = 1;
    for (let i = 1; i <= num; i++) {
        factCount = factCount * i;
    }
    return factCount;
}

const getFact = getFactorial(5);
console.log(getFact);


// factorial function with while loop
function whileFactorial (number) {
    let factorialCounter = 1;
    let loopCounter = 1;
    while (loopCounter <= number) {
        factorialCounter = factorialCounter * loopCounter;
        loopCounter++;
    }
    return factorialCounter;
}

const whileFact = whileFactorial(5);
console.log(whileFact);