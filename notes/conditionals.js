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
let activeSwitch = 9;
let inactiveSwitch = 7;
const deactivated = false;

if (activeSwitch == 9 && inactiveSwitch == 7 && deactivated == false) {
    console.log("ON");
    console.log("Condition of line is Good!");
}
else if (inactiveSwitch == 7 && activeSwitch == 9 && deactivated == true) {
    console.log("OFF");
    console.log("Condition of line is Good!");
} else {
    console.log("The Power Line id DAMAGED!!!");
}
