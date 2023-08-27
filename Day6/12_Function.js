// function addTwoNumber(a, b) { //parameters
//     console.log(a + b);
// }
// function addTwoNumber(a, b) { //parameters
//     const result = a + b;
//     return result;
// }

// const result = addTwoNumber(3, 4)  // arguments
// console.log(result)

function greetMe(userName) {
    if (!userName) {
        console.log("Please Enter a name:-")
        return
    }
    return `Hello , ${userName}`

}
console.log(
    greetMe("Thumar Keval")

)