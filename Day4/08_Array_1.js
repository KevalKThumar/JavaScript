/**
 * [] => brackets 
 * () => parentheses
 * {} => braces  
 */

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(typeof myArray)
// create an array of numbers from 0 to n-1
// where n is the length of `myArray` using map() method.

// console.log(myArray.slice(1, 6)) /* In this range not include */
const newArray = myArray; /** If you do this it will not assign a copy of myArray in this it will assign orignal array
because it is a primitive data type and it will store in heap memory*/

// console.log("A", newArray)
// console.log(newArray.splice(1, 6))
// console.log("B", newArray)


/**
 * In slice :- take a copy of the element which is in range of slice 
 * In splice :- In this it include range also and it will change orignal array also 
 */

myArray.push(10)
myArray.push(11)
myArray.push(12)
myArray.push(13)
myArray.pop()
myArray.unshift(3) // = > Just Like push
myArray.shift() // = > Just Like pop

console.log("array is:-", myArray)


