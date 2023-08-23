// Que:1 you are given an array and you should be display inner properties of that??

Array.prototype.addOwnProperties = "Keval Thumar"

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (const a in array) {
    console.log(a)
    // In this addOwnProperties is not a part of arrays own propertis it is add here it is one in other case it would be any thing so how to copup with it some kind of condition is there for to solve this problame if condition 
}

for (const a in array) {
    if (array.hasOwnProperty(a)) {
        console.log(a)
    }
}