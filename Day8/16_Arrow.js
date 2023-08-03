const user = {
    username: "Keval",
    price: 999,
    isLoggedIn: true,
    welcomeMessage: function () {
        console.log(`${this.username} , Welcome To The Website`)
        console.log(this) // In this line 'this' is reffers to the current context that is user object. 
    }
}
console.log(this) // In this line 'this' is reffers to the Globle context of the Node that is user object. OUTPUT = {} 
user.welcomeMessage()

/**
 * If you are use "console.log(this)" in Browser then it will return a "window" object of the space.
 */


// function Keval() {
//     const username = "Keval"
//     console.log(this.username)  // "this" is not user in function
// }

const Keval = (arguments) => {
    const username = "Keval"
    console.log(this.username)
}

// there are two type of return function in arrow function
/**
 * 1) implisit return
      i) const addTwoNumber = (Number) => Number + 1
     ii) const addTwoNumber = (Number) => (Number + 1) more for Object
          ex. 
             const addTwoNumber = (Number) => {userName : "Keval"} X
             const addTwoNumber = (Number) => ({userName : "Keval"})👍

 *     
 * 2) explisit return
 *    => const addTwoNumber = () => {
                                       return
                                    }
 */
