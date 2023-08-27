// let myName = "Keval     "
// let mychannel = "pizaa     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Keval = function () {
    console.log(`Keval is present in all objects`);
}

Array.prototype.heyKeval = function () {
    console.log(`Keval says hello`);
}

heroPower.Keval()
myHeros.Keval()
myHeros.heyKeval()
// heroPower.heyKeval()

// Old Method for inheritace performe

const User = {
    name: "pizaa",
    email: "pizaa@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// new syntax for inheritance
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "pizaaAurCode     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Keval".trueLength()
"iceTea".trueLength()