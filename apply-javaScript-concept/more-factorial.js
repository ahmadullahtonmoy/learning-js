let factorialOne = 1;
let counterOne = 4;

for (let i = 1; i <=counterOne; i++) {
    factorialOne = factorialOne * i;
}

console.log("This is Factorial One Result:",factorialOne);


// factorial loop with function

function factorialLoop (numberOne) {
    let factorialTwo = 1;
    for (let i = 1; i <= numberOne; i++) {
        factorialTwo = factorialTwo * i;
    }
    return factorialTwo;
}

let randomNumbers = 5;

const callFactorialFunction = factorialLoop(randomNumbers);
console.log("Factorial of",randomNumbers,"is =",callFactorialFunction);




// factorial function with while loop


// factorial function with decrement loop