//  singleton
/**
 * 1) It you make a object with the help of constructor then it will make singleton
 * 2)It you make a object with the help of Litral({name: "keval"}) then it will not make singleton
 */

const mysymbol = Symbol("keval")
const mysymbol1 = Symbol("new symbol")

const object = {
    "name": "keval",
    age: 18,
    [mysymbol]: "keval",
    mysymbol1: "keval t"
}

// console.log(object)
// console.log(object.age)
// console.log(object["age"])
// console.log(object[mysymbol])

// Object.freeze(object)

object.greeting = () => {
    console.log("Hello Js")
}
console.log(object.greeting())
console.log(object.greeting)

