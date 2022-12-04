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
let activeSwitch = 1;
let inactiveSwitch = 0;
const activated = true;
const deactivated = false;

if (activated == true && deactivated == false && activeSwitch == 1 && inactiveSwitch == 0) {
    console.log("ON");
    console.log("Condition of line is Good!");
}
else if (activated == false && deactivated == true && inactiveSwitch == 0 && activeSwitch == 1) {
    console.log("OFF");
    console.log("Condition of line is Good!");
} else {
    console.log("The Power Line id DAMAGED!!!");
}

