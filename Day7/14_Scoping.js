// when you are checking  scop in brouser in that yor globle scope is different then you node 

// let letVariable = 10;
// const constVariable = 20;
// var varVariable = 30;
// if (true) {
//     console.log(letVariable)
//     console.log(varVariable)
//     console.log(constVariable)
// }

/**
 * If you decler a variable in global scop and use in local scope then it is not create a problam .
 */
if (true) {
    let letVariable = 10;
    var varVariable = 30;
    const constVariable = 20;
}
console.log(letVariable) /**  Create a problam */
console.log(varVariable) /** Not create a problam */
console.log(constVariable) /** Create a problam */