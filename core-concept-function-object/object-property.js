var mobileOne = {
    Brand: "Samsung",
    Model: "J6 2018",
    RAM: "3-GB",
    ROM: "32-GB",
    Release: "2018",
    Price: "27,500/= taka",
};

console.log(mobileOne);

// how to read an object property. there are two way to read object property

var mobileBrand = mobileOne.Brand;
console.log("This is mobile brand through variable :",mobileBrand);

console.log("The Mobile Brand is :",mobileOne.Brand);

console.log("The Mobile Brand is :",mobileOne["Brand"]);

// there are two way to set value of an object property.

mobileOne.Price = 30000;
console.log(mobileOne);

mobileOne["Price"] = 30500;
console.log(mobileOne);

var priceProperty = "Price";
mobileOne[priceProperty] = 32500;
console.log(mobileOne);