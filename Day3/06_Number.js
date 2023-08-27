const fixeedValue = 100;
// console.log(fixeedValue.toFixed(2))

const float = 131.22593
// console.log(float.toPrecision(5))

const hundreds = 1000000000000;
// console.log(hundreds.toLocaleString()) /**By defult it will show number as per USA rule */
// console.log(hundreds.toLocaleString("en-IN")) /**Now it will show number as per INDIAN rule */

// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)


// *************************  Maths *****************************

/**
 * Generate Random Number with Math.Random() it will give us value in range of 0 to 1.
 */

const min = 1;
const max = 12;

console.log(Math.floor(Math.random() * ((max - min + 1)) + min))

// This is the Formula for Generate Random number in my range 