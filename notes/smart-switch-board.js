/*
NON-COMPLETED PROJECT

switch activated {
    positive(1) + negative(0) = Positive(1) , Negative(0). health is Good!
    positive(1) + negative(1) = Error! Negative(1) Power on. But Health is not Good!
    positive(0) + negative(0) = Error! Positive(0) , Negative(0). There is no Power! Please Check Your Power Management!
    positive(101) + negative(010) = Error! Positive(>~<) , Negative(>~<). Power Error!!! Check Out What Happened!
}

switch deactivated {
    positive(0) + negative(0) = Positive(0) , Negative(0). health is Good!
    positive(1) + negative(0) = Error! Positive(1) Power is not OFF. Health is not Good!
    positive(1) + negative(1) = DANGER! Positive(1) , Negative(1). The Power Board is Shocked Out! Please REPAIR Your Power Management!
}

writing conditions will be continued....
*/

// creating object for power management DATA...

let activated_1 = {
    Status: "Activated",
    Health: "Good",
    Positive: 1,
    Negative: 0,
    Warning: "All Good",
};
let activated_2 = {
    Status: "Activated",
    Health: "Not Good",
    Positive: 1,
    Negative: 1,
    Warning: "Error! This Gonna be a Serious Problem! Its Harm for Your Devices! Please Repair Your Power Management!!",
};
let activated_3 = {
    Status: "Activated",
    Health: "Not Good",
    Positive: 0,
    Negative: 0,
    Warning: "Error! There is no power! Please Check Your Power Management!",
};
let activated_4 = {
    Status: "Activated",
    Health: "Damaged!",
    Positive: "[>~<]",
    Negative: "[>~<]",
    Warning: "DANGER! Repair Your Power Management Before Using it!",
};
let deactivated_1 = {
    Status: "Deactivated",
    Health: "Good",
    Positive: 0,
    Negative: 0,
    Warning: "All Good!",
};
let deactivated_2 = {
    Status: "Deactivated",
    Health: "Not Good!",
    Positive: 1,
    Negative: 0,
    Warning: "System Error! The Power is not Down",
};
let deactivated_3 = {
    Status: "Deactivated",
    Health: "DANGER!",
    Positive: 1,
    Negative: 1,
    Warning: "The Power Board is Shocked Out! Please REPAIR Your Power Management!",
};
/*
// activated 1st condition
let activate = true;
let deactivate = false;

let positive = 1;
let negative = 0;

// activated 2nd condition:

positive = 1;
negative = 1;

// activated 3rd condition:

positive = 0;
negative = 0;

// activated 4th condition:

positive = 101;
negative = 010;

// deactivated 1st condition:
activate = false;
deactivate = true;
deactivate = false;

positive = 0;
negative = 0;

// deactivated 2nd condition:

positive = 1;
negative = 0;

// deactivated 3rd condition:

positive = 1;
negative = 1;
*/
if (activate == true && deactivate == false) {
    if (positive == 1 && negative == 0) {
        console.log(activated_1);
    }
    else if (positive == 1 && negative == 1) {
        console.log(activated_2);
    }
    else if (positive == 0 && negative == 0) {
        console.log(activated_3);
    }
    else if (positive == 101 && negative == 010) {
        console.log(activated_4);
    }
    else {
        console.log("Your System is Throttled. REPAIR Immediate");
    }
}
else if (activate == false && deactivate == true) {
    if (positive == 0 && negative == 0) {
        console.log(deactivated_1);
    }
    else if (positive == 1 && negative == 0) {
        console.log(deactivated_2);
    }
    else if (positive == 1 && negative == 1) {
        console.log(deactivated_3);
    }
    else {
        console.log("Your System is Throttled. REPAIR Immediate");
    }
} else {
    console.log("Your System is Throttled. REPAIR Immediate");
}


// let the logic in function

function powerStatus (power1 , power2 , line1 , line2) {
    if (power1 == true && power2 == false) {
        if (line1 == 1 && line2 == 0) {
            return activated_1;
        }
        else if (line1 == 1 && line2 == 1) {
            console.log(power1d_2);
        }
        else if (line1 == 0 && line2 == 0) {
            console.log(power1d_3);
        }
        else if (line1 == 101 && line2 == 010) {
            console.log(power1d_4);
        }
        else {
            console.log("Your System is Throttled. REPAIR Immediate");
        }
    }
    else if (power1 == false && power2 == true) {
        if (line1 == 0 && line2 == 0) {
            console.log(power2d_1);
        }
        else if (line1 == 1 && line2 == 0) {
            console.log(power2d_2);
        }
        else if (line1 == 1 && line2 == 1) {
            console.log(power2d_3);
        }
        else {
            console.log("Your System is Throttled. REPAIR Immediate");
        }
    } else {
        console.log("Your System is Throttled. REPAIR Immediate");
    }
}

let activate = true;
let deactivate = false;

let positive = 1;
let negative = 0;

var result = powerStatus(activate,deactivate,positive,negative);
console.log(result);