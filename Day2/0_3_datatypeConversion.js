// let score = "33"; =>> convert ans 33
// let score = "33acb" =>>> not convert NaN (type of Nan is number)
//  let score = null  =>>> convert ans 0
//  let score = undefine  =>>> not convert ans Nan
//  let score = true  =>>> convert ans 1 false 0

// console.log(typeof score);
// console.log(typeof (score)); 

// If you went to change data type in JavaScript 

let changeIntoNumber = Number(score);
// console.log(typeof (changeIntoNumber));
/* Type of "33acb" in number is not define that why it show NaN (Not a Number) type of NaN is also number */
// console.log(changeIntoNumber)


console.log(2 ** 2) /*=>> power of 2*/

console.log("2" + 1) /* 21 */
console.log(2 + "1") /* 21 */
console.log("2" + 1 + 2) /* 212 */
console.log(2 + 1 + "2") /* 32 */






