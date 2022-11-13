let factorial = 1;
let counter = 3;

for (let i = 1; i <= counter; i++) {
    console.log("Counting ForLoop:",i);
    factorial = factorial * i;
}

console.log("This is Factorial Result:",factorial);