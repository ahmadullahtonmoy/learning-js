// Task - 1: create a function with three parameter, that's find for max valued item.
// Task - 2: create a function, that's find lowest valued item.

let max = Math.max(5,10);
console.log(max);

function findMax (first,second,third) {
    if (first > second && first > third) {
        return first;
    }
    else if (second > first && second > third) {
        return second;
    }
    else if (third > first && third > second) {
        return third;
    }
}

let apple = 100;
let orange = 200;
let lichi = 300;

let biggerNumber = findMax(apple,orange,lichi);
console.log(biggerNumber,"is Bigger than Others");