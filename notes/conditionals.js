// greater then , less then , equals to ......... ETC
let apple; let orange; let banana;

apple = 10; orange = 20; banana = 30;

if (apple < orange) {
    // console.log("Take Apple");
}


// making a on/off switch:
/*
the nested condition will be written later..........
[out of topic{those are binary(1000 , 1011)those are binary}out of topic]
*/
let positivePower = 1;
let negativePower = 0;

// positivePower = 0;
// negativePower = 1;

const activated = false;
const deactivated = true;

if (activated == true && deactivated == false) {
    if (positivePower == 1 && negativePower == 0) {
        console.log("The Switch is ON");
        console.log("Condition of Power is Good!");
    }
    else if (positivePower != 1 && negativePower == 0) {
        console.log("Error!!! There is no Positive Power on the Socket");
    }
    else if (positivePower == 1 && negativePower != 0 || positivePower == 0 && negativePower != 0) {
        console.log("DANGER!!! The Power Line is Shocked!");
    }
}
else if (activated == false && deactivated == true) {
    if (positivePower == 0 && negativePower == 0) {
        console.log("The Switch is OFF");
        console.log("Condition of Power is Good!");
    }
    else if (positivePower != 0 && negativePower == 0) {
        console.log("Error!!! Switch is OFF but Positive Power is Exist in Socket");
    }
    else if (positivePower == 0 && negativePower != 0 || positivePower == 1 && negativePower != 0) {
        console.log("DANGER!!! The Power Line is Shocked!");
    }
}else {
    console.log("The Power Line is DAMAGED!!!");
}

