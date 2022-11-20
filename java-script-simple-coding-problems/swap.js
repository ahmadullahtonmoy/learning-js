let colorOne = "Black";
let colorTwo = "White";

console.log(colorOne,colorTwo);

// first approach
let temp = colorOne;
colorOne = colorTwo;
colorTwo = temp;

console.log(colorOne,colorTwo);

// second approach
[colorOne,colorTwo] = [colorTwo,colorOne];
console.log(colorOne,colorTwo);