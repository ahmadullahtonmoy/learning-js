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