// 1km = 1000 meter;

function meterToKm (meters) {
    let km = meters / 1000;
    return km;
}

var randomMeter = meterToKm(40000);
console.log(randomMeter);