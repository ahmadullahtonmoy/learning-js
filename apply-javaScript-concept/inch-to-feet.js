function bringSingara(taka){
    let singaraPrice = 5;
    let totalSingara = taka / singaraPrice;
    return totalSingara;
}

var singaraQuantity = bringSingara(50);
console.log("Shingara Quantity:",singaraQuantity);


// inch to feet converter
function inchToFeet (inches) {
    var feet = inches / 12;
    return feet;
}

const myInches = 50;
let myFeet = inchToFeet(myInches);
console.log("My Feet",myFeet);

const secondInches = 120;
let secondFeet = inchToFeet(secondInches);
console.log("Second Feet:",secondFeet);