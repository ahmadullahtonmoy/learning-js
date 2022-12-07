function powerStatus (power1 , power2 , line1 , line2) {
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
}