const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0]
for (const nums of arr) {

    // console.log(nums)
}

const greeting = "Hello World!"

for (const greet of greeting) {
    if (greet == " " || greet == "!") {
        continue
    }
    // console.log(greet)
}
// Map:- The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.it is store at one time if it is set multipal time

// Map if itretable in forof loop and Object is not itretable in forof loop

const map = new Map()
map.set("middlename", "keval")
map.set("firstname", "thumar")
map.set("lastname", "kamleshbhai")
// console.log(...map) //=>mening of this is it is a copy of map in form of array
// console.log(map)

for (const [key, value] of map) {
    // console.table({ key, value });
}

const user = {
    firstname: 'Thumar',
    lastname: 'KamleshBhai',
    age: '22',
    gender: "male",
    address: {
        streetName: "Jetalsar",
        city: "Rajkot",
        country: "India",
        pincode: 360360
    },
    hobbies: [
        "football",
        "cricket",
        "basketball"
    ],
}

for (const object of user) {
    // console.log(object) // it gives an error like this "user is not iterable" it means that object is not itrable using forof
}

