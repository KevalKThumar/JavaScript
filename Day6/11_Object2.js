const matriMonialUser = new Object();

matriMonialUser.id = "abc123"
// console.log(matriMonialUser.id)

const regularUser = {
    email: "abc@google.com",
    fullName: {
        userFullName: {
            firstName: "John",
            lastName: "Doe",
        }
    }
}
// console.log(regularUser.email)
// console.log(regularUser.fullName.userFullName.firstName)

// join Object

const Obj1 = { 1: "a", 2: "b" }
const Obj2 = { 3: "a", 4: "b" }
const Obj3 = { 5: "a", 6: "b" }

// there two way to join object
const joinObjFirst = Object.assign({}, Obj1, Obj2, Obj3)
// console.log(joinObjFirst)

// console.log({ ...Obj1, ...Obj2, ...Obj3 })


const user = [
    {
        id: "123321",
        email: "keval@gmail.com"
    },
    {
        id: "123321",
        email: "keval@gmail.com"
    },
    {
        id: "123321",
        email: "keval21@gmail.com"
    },
    {
        id: "123321",
        email: "keval12@gmail.com"
    },
    {
        id: "123321",
        email: "keval@gmail.com"
    },
    {
        id: "123321",
        email: "keval@gmail.com"
    },
    {
        id: "123321",
        email: "keval@gmail.com"
    },
]
/*
console.log(Object.keys(regularUser)) //==>> It wiil give as an erray of all keys in the object
console.log(Object.values(regularUser)) //==>> It wiil give as an erray of all value in the object
console.log(Object.entries(regularUser)) //==>> It wiil give as an erray of all entries in the object
*/

// Object Destructure

const FlutterApp = {
    name: "Matrimonial App",
    devloper: "keval Thumar",
    price: 200000,
    rating: "4 stars",
    releaseDate: "April-May 2021"
}

const { name, devloper, price, rating, releaseDate: date } = FlutterApp;

console.log(name)
console.log(devloper)
console.log(date)