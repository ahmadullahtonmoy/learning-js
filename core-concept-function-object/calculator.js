// additional function
function addition (firstAdditionNumber , secondAdditionNumber) {
    var totalAddition = firstAdditionNumber + secondAdditionNumber;
    return totalAddition;
}

var priceOne = 25;
var priceTwo = 15;

var additionText = "This is Addition Result:";

var additionResult = addition(priceOne , priceTwo);
console.log(additionText,additionResult);


// subtractions function
function subtraction (firstSubtractNumber,secondSubtractNumber) {
    var totalSubtraction = firstSubtractNumber - secondSubtractNumber;
    return totalSubtraction;
}

var budgetMoney = 200;
var totalAmount = 170;

var subtractionText = "This is Subtraction Result:";

var subtractionResult = subtraction(budgetMoney,totalAmount);
console.log(subtractionText,subtractionResult);


// multiplication function
function multiplication (firstMultiplicationNumber , secondMultiplicationNumber) {
    var totalMultiplication = firstMultiplicationNumber * secondMultiplicationNumber;
    return totalMultiplication;
}

var rowCount = 5;
var columnCount = 6;

var multiplicationText = "This is Multiplication Result:";

var multiplicationResult = multiplication(rowCount , columnCount);
console.log(multiplicationText,multiplicationResult);


// division
function division (firstDivisionNumber , secondDivisionNumber) {
    totalDivision = firstDivisionNumber / secondDivisionNumber;
    return totalDivision;
}

var totalMango = 100;
var hungryPeople = 20;

var divisionText = "This is Division Result:";

var divisionResult = division(totalMango,hungryPeople);
console.log(divisionText,divisionResult);