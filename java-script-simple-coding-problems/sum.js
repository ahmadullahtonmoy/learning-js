// declaring an array
const randomNumbers = [2 , 4 , 6 , 8 , 10];

// sum variable, which will contain the randomNums values.
let sum = 0;

// adding a for loop
for (let i = 0; i < randomNumbers.length; i++) {
    const arrayNumbers = randomNumbers[i];
    sum = sum + arrayNumbers;
}

// console.log(sum);