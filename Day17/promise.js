// promise :- A Promise is an object representing the eventual completion or failure of an asynchronous operation

// It is just mean that is anyone is promise to you to do work if this promise will be complition/Fulfilled or Rejected by them. if it complition then it will be handle by .then(callBack,callBack) or Rejected then it will be handle by .catch(callBack) 


const promise1 = new Promise(function (resolve, reject) {
    // Do an asnyc task or Db connection or criptographic task

    setTimeout(() => {
        console.log("async task Complate")
        // without call resolve() method we can not connact promise and then method
        resolve() // it will accept perameter also
    }, 1000)
})

promise1.then(() => {
    console.log('promise resolved')
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("with out assing to the variable")
        resolve()
    }, 1000)
}).then(function () {
    console.log('promise2 resolved')
})






