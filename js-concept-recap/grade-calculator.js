
function getGrade (num) {
    if (num >= 80 && num <= 100) {
        console.log("Yey!! You Got GPA-5!");
    }
    else if (num >= 70 && num <= 79) {
        console.log("You Got A");
    }
    else if (num >= 60 && num <= 69) {
        console.log("You Got A-");
    }
    else if (num >= 50 && num <= 59) {
        console.log("You Got B");
    }
    else if (num >= 40 && num <= 49) {
        console.log("You Got C");
    }
    else if (num >= 33 && num <= 39) {
        console.log("You Got D");
    }
    else if (num >= 0 && num <= 32) {
        console.log("Ohh NO!! You Are Failed!");
    }
}

/* getGrade(90);
getGrade(70);
getGrade(60);
getGrade(50);
getGrade(40);
getGrade(33);
getGrade(32); */

const rafiMark = getGrade(45);
console.log("Hey Rafi!",rafiMark);
// there is a bug in function return.........