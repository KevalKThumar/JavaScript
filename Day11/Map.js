let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums = myNums.map((nums) => {
//      return nums + 10;
// })
// console.log(myNums)

// myNewNums = []
// myNums.forEach((nums) => {
//     myNewNums.push(nums)
// })
// console.log("",myNewNums)

// const myNewNums = myNums
//     .map((nums) => nums + 10)   //Compleate this for full array after this it wiil pass to the second map
//     .map((num) => num * 10)
//     .filter((num) => num >= 50)

// console.log(myNewNums)



// *************************REDUCE*****************************

/**
 * Reduce is the method in array in which we have two parameter in callback function 
 * 1)accumletor 2) currentValue and for initialision of accumletor we will pass one 
 * more parameter after the callback function which is for initial value of accumletor
 * Bydefult it wiil tacke '0' as a perameter
 * 
 * working process of Reduce method in js is:
 *  1) 
 *  
 */

let myNewNums = [2, 3]

// myNewNums = myNewNums.reduce(function (accumletor, currentValue) {
//     console.log(`accumletor is ${accumletor} and currentValue is ${currentValue}`)
//     return accumletor + currentValue
// }, 1)
// console.log(myNewNums)

// myNewNums = myNewNums.reduce((accumletor, currentValue) => accumletor + currentValue)
// console.log(myNewNums)


const shoppingCart = [
    {
        course: "js course",
        price: 2999
    },
    {
        course: "java course",
        price: 3999
    },
    {
        course: "py course",
        price: 5999
    },
    {
        course: "MERN course",
        price: 9999
    },
    {
        course: "flutter course",
        price: 19999
    },
]

const totalValue = shoppingCart.reduce((acc, item) => (acc + item.price), 0)
console.log(totalValue)
console.log(totalValue)