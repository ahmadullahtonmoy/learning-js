// additional function
function addition (firstAdditionNumber , secondAdditionNumber) {
    var totalAddition = firstAdditionNumber + secondAdditionNumber;
    return totalAddition;
}

var priceOne = 25;
var priceTwo = 15;

var additionText = "This is Addition Result";

var additionResult = addition(priceOne , priceTwo);
console.log(additionText,additionResult);


// subtractions function
function subtraction (firstSubtractNumber,secondSubtractNumber) {
    var totalSubtraction = firstSubtractNumber - secondSubtractNumber;
    return totalSubtraction;
}

var budgetMoney = 200;
var totalAmount = 170;

var subtractionText = "This is Subtraction Result";

var subtractionResult = subtraction(budgetMoney,totalAmount);
console.log(subtractionText,subtractionResult);