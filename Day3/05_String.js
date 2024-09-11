// const name = "keval"
// const repoCount = 7
// console.log(name + repoCount + " Value")  OutDated

// ******* New Method :- String Intropoletion **********

const name = "keval"
console.log(`Hello ${name}, How are you!!`)

// if you decaler String like this then it is Object of String
/**
 * 
 * "Keval" is store like this::::
 * {
 *    0:"K",
      1:"e",
      2:"v",
      3:"a",
      4:"l"
 * }
 */
const nameWithObj = new String("Keval")
console.log(`Hello ${nameWithObj}, How are you!!`)

// console.log(nameWithObj.length)
// console.log(nameWithObj.toLowerCase())
// console.log(nameWithObj.toUpperCase())
// console.log(nameWithObj.indexOf('a'))
// console.log(nameWithObj.charAt(3))



const subString = nameWithObj.substring(1, 4) /* In this you can insrt only positive number of range*/
const anotherString = nameWithObj.slice(1) /** In this it will go to the 4th position and print or add String like throug reverce */

/**
 * concept of this is for subString  0  1  2  3  4
 *                                   K  e  v  a  l 
 *                        for slice -5 -4 -3 -2 -1   
 *   0 1 2 3                                
 *   A M A N
 *  -4-3-2 -1
 */                                  

// console.log(nameWithObj.indexOf('a'))
console.log(subString, anotherString)

/**
 * After toLowerCase or toUpperCase orignal value can not be change bcz it is a object and it is store in heap memory that's why it is not change it's actual value it change copy of or instance of nameWithObj.
 */

const url = "https://Localhost:3000/%20api/v1/%20register"
// console.log(url)
// console.log(url.replace("%20", "-")) /**It is changing only first element of search */
// console.log(url.includes("https"))
// console.log(url.includes("kevalq"))

const gameName = "Thumar-Keval-Kamleshbhai"
console.log(gameName.split('-'))

