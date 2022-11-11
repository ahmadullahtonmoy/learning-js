// is even number function.

function isEven (number) {
    if (number % 2 == 0 ) {
        return true;
    }
    return false;
}

const evenConsoleText = "20 is even number:";

const isEvenCheck = isEven(20);
console.log(evenConsoleText,isEvenCheck);