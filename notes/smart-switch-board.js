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
    Note: "All Good",
};  let activated_2 = {
        Status: "Activated",
        Health: "Not Good",
        Positive: 1,
        Negative: 1,
        Note: "Error! This Gonna be a Serious Problem! Its Harm for Your Devices! Please Repair Your Power Management!!",
    };
