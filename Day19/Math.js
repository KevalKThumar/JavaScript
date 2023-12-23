
const descrepter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descrepter)
console.log(Math.PI)

// Object.defineProperty(Math, "PI", {
// writable:true

// })

const user = {
    userName: "keval",
    age: "19"
}
console.log(user)

let usersDescrepter = Object.getOwnPropertyDescriptor(user, "userName")
console.log(usersDescrepter)

for (const [key, value] of Object.entries(user)) {
    console.log(`${key} : ${value}`)
}

Object.defineProperty(user, "userName", {
    configurable: false,
    enumerable: false,
    writable: false
})

usersDescrepter = Object.getOwnPropertyDescriptor(user, "userName")
console.log(usersDescrepter)

for (const [key, value] of Object.entries(user)) {
    console.log(`${key} : ${value}`)
}

