// is even number function.

function isEven (number) {
    if (number % 2 == 0 ) {
        return true;
    }
    return false;
}

const evenConsoleText = "The Input Number is even number:";

const isEvenCheck = isEven(20);
console.log(evenConsoleText,isEvenCheck);


function isOdd (numberOdd) {
    if (numberOdd % 2 != 0) {
        return true;
    }
    return false;
}

const oddConsoleText = "The Input Number is odd Number:";

const isOddCheck = isOdd(20);
console.log(oddConsoleText,isOddCheck);