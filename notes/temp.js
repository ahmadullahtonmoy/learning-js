function powerStatus (power1 , power2 , line1 , line2) {
    if (power1 == true && power2 == false) {
        if (line1 == 1 && line2 == 0) {
            console.log(power1d_1);
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