
// With out use of REST Opretor
// function addAllCartItemsPrice(items) {
//     return items
// }
// If you resived number of items which is you don't know then you are stuck in that condition that you are passing more then one perameter and you are resived only one argument the you use REST opretor
// REST Opretor simply return an array of what ever you pass......
function addAllCartItemsPrice(...items) {
    return items
}
// console.log(addAllCartItemsPrice(12, 32, 12, 33, 22, 44, 11))


function displayUserObject(getUser) {
    console.log(`Hello ${getUser.userName}, Your bill is ${getUser.price}`)
}

// displayUserObject({
//     userName: "John Doe",
//     price: "$50"
// })


function DisplaySecondElementOfArray(getArray) {

    return getArray[1];

}
const myNewArray = [12, 124, 512, 433, 245]
console.log(DisplaySecondElementOfArray(myNewArray))
