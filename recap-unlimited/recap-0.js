// Declaring a variable
var ricePrice = 15;
var someoneName = "Hablu";
let dressPrice = 20;
// changing the value of variables
dressPrice = 27;
ricePrice = 20;
someoneName = "Hablu 0.0";

// Declaring a constant, which value never can be change.
const peopleName = "Rashid";
const skyQty = 7;
const humanMortal = true;

// simply mathematics like adding , subtraction , multiply , divide with var or let.
let iceCreamPrice = 20;
let chocolatePrice = 25;
let donutPrice = 30;

var totalPrice = iceCreamPrice + chocolatePrice + donutPrice;
console.log("Total Price of Ice Cream , Chocolate and Donut is:" , totalPrice);

// now i'll find out the donut price from the total price of those three item using subtraction.
let knowDonutPrice = totalPrice - (iceCreamPrice + chocolatePrice);
console.log("The Donut Price Is:" , knowDonutPrice)

// now i'll get double of total price by using multiply.
let itDouble = totalPrice * 2;
console.log("The Double of Total Price is:" , itDouble);

// now i'll see the remaining price of total price if that is divided equally to people by using modulus.
let people = 2;
let remainingPrice = totalPrice % people;
console.log("After divided in two people the Remaining Price Is:" , remainingPrice);

// let's divide it in 3 people.
people = 3;
let divideIt = totalPrice / people;
console.log("Everyone Should Paying Amount is:" , divideIt);


// mathematic sort hand . += , -= , *=
// += increase value , -= decrement value
let increase = 0;
let decrement = 20;
console.log("Increase Value Before Increase:",increase);
console.log("Decrement Value Before Decrement:",decrement);

increase += 1;
decrement -= 1;
console.log("Increase Value After Increase one level:",increase);
console.log("Decrement Value After Decrement one level:",decrement);

increase += 2;
decrement -= 2;
console.log("Increase Value, After Increase two level:",increase);
console.log("Decrement Value, After Decrement two level:",decrement);


// array. declaring an array.
var friendsName = [];
console.log("Friends Name Array:",friendsName);
// data entry in array.
friendsName.push("Hablu");
friendsName.push("Bablu");
friendsName.push("Kablu");
friendsName.push("Yablu");
friendsName.push("Jablu");
friendsName.push("Pablu");
friendsName.push("Dablu");
console.log(friendsName);
// data out from array last position using pop.
friendsName.pop();
friendsName.pop();
friendsName.pop();
friendsName.pop();
console.log(friendsName);


// conditionals (if-else , else-if , else)

if (friendsName.length >= 4) {
    console.log("There are up to minimum data in the array");
}
else if (friendsName.length <= 4) {
    console.log("There are minimum data in the array");
}
else {
    console.log("There no limit pack in the array");
}

// nested condition
let person = 5;
let fruits = 15;

if (person = 5) {
    if (fruits = 15) {
        console.log("Everyone get Equally:", 15/5);
    }
    else if (person = 3) {
        console.log("Everyone get Equally:", 15/3);
    }
    else if (person = 1) {
        console.log("All fruits in one hand!");
    }
}
else {
    console.log("Khawa lagbona karo");
}



// for loop
// for loop run for counting zero to twenty
for (let i = 0; i <= 20; i++) {
    console.log("For Loop Counter Running for 0 to 20:" , i);
}



// while loop
// while loop run for counting zero to twenty
let whileCount = 0;

while (whileCount <= 20) {
    console.log("While Loop Counter Running for 0 to 20:" , whileCount);
    whileCount++;
}