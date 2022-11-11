// 1km = 1000 meter;

function meterToKm (meters) {
    let km = meters / 1000;
    return km;
}

const firstText = "Meter =";
const lastText = "Kilo Meter";

var randomMeter = meterToKm(40000);
console.log(40000 , firstText , randomMeter , lastText);