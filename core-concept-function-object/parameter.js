function bringShingara (taka) {
    console.log("Singarar jonno dice", taka ,"Taka");
    console.log("mama singara den");
    var singaraPrice = 10;
    var giveSingara = taka / singaraPrice;
    return giveSingara;
}

var money = 250;
var returnShingara = bringShingara(money);
console.log("Shingara Dice",returnShingara,"Ta");