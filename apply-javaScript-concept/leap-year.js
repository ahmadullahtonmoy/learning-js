function isLeapYear (yearNumber) {
    if (yearNumber % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

let years = 1990;
// years = 2020;
// years = 2024;

const leapYearText = "is leap year:";
const ifLeapYear = isLeapYear(years);
console.log(years,leapYearText,ifLeapYear);