// float to int
let one = 4.45;
let intOne = parseInt(one);
console.log(intOne);

// random numbers
let random = Math.random();
console.log(random);

// integer to upper closest number
let numberUpDown = 5.7;
let intTwo = Math.ceil(numberUpDown);
console.log(intTwo);

// integer to lower closest number
let intThree = Math.floor(numberUpDown);
console.log(intThree);

// random integer
let randomInt = Math.floor(Math.random() * 7);
console.log("Random Rice:",randomInt);

// return random int 1 to 10;
let randomTwo = Math.floor(Math.random() * 11) + 1;
console.log("1-10 Random Dice:", randomTwo);