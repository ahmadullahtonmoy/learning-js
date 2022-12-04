// greater then , less then , equals to ......... ETC
let apple; let orange; let banana;

apple = 10; orange = 20; banana = 30;

if (apple < orange) {
    // console.log("Take Apple");
}


// making a on/off switch:
/*
switch on , good condition.
switch on , bad condition.
switch off , good condition.
switch off , bad condition.
[out of topic{those are binary(1000 , 1011)those are binary}out of topic]
*/
let positivePower = 1;
let negativePower = 0;

positivePower = 0;

const activated = true;
const deactivated = false;

if (activated == true && deactivated == false && positivePower == 1 && negativePower == 0) {
    console.log("The Switch is ON");
    console.log("Condition of Power is Good!");
}
else if (activated == true && deactivated == false && positivePower == !1 && negativePower == 0) {
    console.log("ERROR!!! There is no Positive Power!!!")
}
else if (activated == false && deactivated == true && negativePower == 0 && positivePower == 1) {
    console.log("The Switch is OFF");
    console.log("Condition of Power is Good!");
} else {
    console.log("The Power Line is DAMAGED!!!");
}

