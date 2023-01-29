// Function Zero
function function0(){
    var txt = "JS Executing From VS-Code SuperNova";
    return txt;
}

const txt = function0();
console.log(txt);

// Function One
function function1(p1,p2){
    return p1 + p2;
}

let result1 = function1(2 , 2);
result1 = function1(4 , 4);
console.log("Result of Function-One is:" , result1);

// Function Two
const function2 = function (num1 , num2) {return num1 * num2;};
let multiply = function2(2 , 2);
console.log("Result of Function-Two is:",multiply);
