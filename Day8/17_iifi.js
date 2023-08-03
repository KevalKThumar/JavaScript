// Immediately Invoked Function Expressions (IIFI)

// We are use iifi for the remove global scope variable bcz that is creating a problam sometime for the immediately function execution
// sysntex: (function defination)<<--keval (finction name)
//          ()<<--() is use for function without is it is generete only
//          reference of the function   ex.keval()

(function keval() {
    console.log(`DB Connected`)
})(); //==> This is Unnameed iifi

((nameOfDb) => {
    console.log(`DB Connected To ${nameOfDb}`)
})("MongoDb");  //==> This is Unnameed iifi
