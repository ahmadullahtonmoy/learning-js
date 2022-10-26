var hasHome = true;
var hasJob = true;
var salary = 12000;

if (hasHome == true && hasJob == true) {
    console.log("You can marry.");
}
else{
    console.log("You poor! GO away. You can't marry.");
}

var isRainy = true;
var isCloudy = true;

var homeAvailable = "You can go home.";
var homeNotAvailable = "You can't go home. Stay here.";

if (isRainy == true) {
    console.log(homeNotAvailable);
}
else {
    console.log(homeAvailable);
}

isRainy = false;

if (isCloudy == true && isRainy == false) {
    console.log(homeAvailable);
}
else {
    console.log(homeNotAvailable);
}

// multiple conditions

var nokia = 200;
var samsung = 250;
var sony = 300;
var symphony = 150;
var iphone = 500;
var realme = 350;

var buySam = "Samsung";
var buyNok = "Nokia";
var buySon = "Sony";
var buySym = "Symphony";
var buyIph = "IPhone";
var buyMI8 = "Realme";

var myBudget = 800;

var canBuy = "You Got ";
