const marvel = ["abc", "def"]
const dc = ["keval", "thumar",]

// marvel.push(dc) //=> It will add as a array  in marvel 
// console.log(marvel) //=>[ 'abc', 'def', [ 'keval', 'thumar' ] ]

// console.log(marvel.concat(dc))
// [ 'abc', 'def', 'keval', 'thumar' ]


// const allName = [...dc, ...marvel]
// console.log(allName)

const array = [1, 2, [2, 3, 5], [2, 2, 3, [23], [232]], 2, [232, 23, 23, 23, [3333], [9293]]]

// console.log(array.flat(Infinity))

console.log(Array.isArray("keval"))
console.log(Array.from("keval"))
console.log(Array.from({ name: "keval" }))
// It will give a null value bcz you will not given that create an array of key or result


const a = 100;
const b = 200;
const c = 300;

console.log(Array.of(a, b, c))