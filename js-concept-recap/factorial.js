
function getFactorial (num) {
    let factCount = 1;
    for (let i = 1; i <= num; i++) {
        factCount = factCount * i;
    }
    return factCount;
}

const getFact = getFactorial(5);
console.log(getFact);