// variables , types , naming convention


// array
var colors = ["White","Black","Blue","Red"];
console.log(colors);
// array index
var blackIndex = colors.indexOf("Black");
colors[2]= "Dark";
console.log(colors);
console.log(blackIndex);
// push & pop

// length


// conditionals
if (colors.length <= 7) {
    console.log("You Have Little colors");
}
else {
    console.log("You Have too many colors");
}