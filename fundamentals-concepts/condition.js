var isRainy = true;
var isCloudy = true;
var isFresh = true;
isCloudy = false;
isFresh = false;

if (isRainy == true && isCloudy == true){
    console.log("I will stay at home");
}

if (isFresh == true && isCloudy == true){
    console.log("I will go out");
}

if (isCloudy == true || isRainy == true){
    console.log("I will eat Pizza");
}


var friedRice = 20;
var chap = 10;
var cookies = 5;
var soup = 2;

var myBudget = 30;

if (friedRice <= myBudget) {
    console.log("I'll Eat fried Rice. That's final");
}

myBudget = 19;
if (chap <= myBudget && myBudget < friedRice) {
    console.log("I will eat chap");
}