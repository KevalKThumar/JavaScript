// if (2 == 2) console.log('one'),console.log('tow');
const months = 3
switch (months) {
    case 3:

        break; //if you dont write break then it will execute all the dowen ase of 

    default:
        break;
}

// falsy value
// false, "", BigInt 0n, 0, -0,null,undefined,NaN

// truthy value
// "0", "false", " ", function () { },[],{}


// How to check Array is empty or not

const userArray = []

if (userArray.length === 0) {
    console.log("Array is Empty")
}

const EmptyObject = {
    Keval: "name"
}
if (Object.keys(EmptyObject).length === 0) {
    console.log("Object is Empty")

}

// nullish coalescing Operator (?)

let val1;
val1 = 5 ?? 10; //==>>5
val1 = null ?? 21; //==>>21
val1 = undefined ?? 33; //==>>33
val1 = null ?? 12 ?? 1222; //==>>12

