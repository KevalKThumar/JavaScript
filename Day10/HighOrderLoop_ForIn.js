// In forof Loop it wiil directly gives as a value of the map ,array,string etc..
// In forin Loop it wiil not gives as directly value it will gives as a key of the value.

const user = {
    firstname: 'Thumar',
    middlename: "keval",
    lastname: 'KamleshBhai',
    age: '22',
    gender: "male",
    address: [
        "Jetalsar",
        "Rajkot",
        "India",
        360360
    ],
    hobbies: [
        "football",
        "cricket",
        "basketball"
    ],
}

for (const key in user) {
    // console.log(`${key} is ${user[key]}`)
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0]
for (const nums in arr) {

    // console.log(arr[nums])clear

}


const map = new Map()
map.set("middlename", "keval")
map.set("firstname", "thumar")
map.set("lastname", "kamleshbhai")

for (const key in map) {
    console.log(key) //map is not itretable in forin loop   
}