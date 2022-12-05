/*
switch activated {
    positive(1) + negative(0) = Positive(1) , Negative(0). health is Good!
    positive(1) + negative(1) = Error! Negative(1) Power on. But Health is not Good!
    positive(0) + negative(0) = Error! Positive(0) , Negative(0). There is no Power! Please Check Your Power Management!
    positive(!= 1) + negative(!=0) = Error! Positive(>~<) , Negative(>~<). Power Error!!! Check Out What Happened!
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
};  let activated_2 = {
        Status: "Activated",
        Health: "Not Good",
        Positive: 1,
        Negative: 1,
        Warning: "Error! This Gonna be a Serious Problem! Its Harm for Your Devices! Please Repair Your Power Management!!",
    };  let activated_3 = {
            Status: "Activated",
            Health: "Not Good",
            Positive: 0,
            Negative: 0,
            Warning: "Error! There is no power! Please Check Your Power Management!",
        };  let activated_4 = {
                Status: "Activated",
                Health: "Damaged!",
                Positive: "[>~<]",
                Negative: "[>~<]",
                Warning: "DANGER! Repair Your Power Management Before Using it!"
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

let activate = true;
let deactivate = true;

let positive = 1;
let negative = 0;

if (activate == true && deactivate == true) {
    if (positive == 1 && negative == 0) {
        console.log(activated_1);
    }
    else if (positive == 1 && negative == 1) {
        console.log(activated_2);
    }
    else if (positive == 0 && negative == 0) {
        console.log(activated_3);
    }
}