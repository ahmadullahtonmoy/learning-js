// Different variable types and use toFixed with parseFloat.

// i thought that there are only three types of variable. but there are mso many data types in js.
/*  some types of variable: 1- Numerical 2- String 3- Boolean 4- Undefined 5- Null */

// undefined
var undefined;

console.log(undefined);

// numeric from string with parseFloat or parseInt.

var tomAge = "12";
var jerryAge = "6.50";
var mickeyAge = "7.50";

var ageOne = parseFloat(tomAge);
var ageTwo = parseFloat(jerryAge);
var ageThree = parseFloat(mickeyAge);
console.log(ageOne, ageTwo, ageThree);

var intOne = parseInt(jerryAge);
var intTwo = parseInt(mickeyAge);
console.log(intOne, intTwo);