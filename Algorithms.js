// Modulo means remainder

console.log(5 + 3 === 8) // => true
console.log(5 - 3 === 2) // => true
console.log(5 / 3 === 1.6666667) // => true
console.log(5 * 3 === 15) // => true
console.log(5 % 3 === 2) // => true
console.log(10 % 3 === 1) // => true

// One of the reasons modulo is useful because it allows us to figure out whether a number is odd or even

console.log(10 % 2 === 0) // => true
console.log(6 % 2 === 0) // => true
console.log(1234568 % 2 === 0) // => true
console.log(3 % 2 === 1) // => true
console.log(7 % 2 === 1) // => true
console.log(123456789 % 2) === 1 // => true

// Write a function, isEven, which takes an input n and returns true if the number is even. Othwerwise, return false.

function isEven(n) {
    if(n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(564));
console.log(isEven(437));