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


const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ user: "Keval", email: "thumarkeval12@gmail.com" })
    }, 1000)
})

promise3.then(
    (user) => {
        console.log(user)
    }
)

const promise4 = new Promise(function (resolve, reject) {
    const error = false
    setTimeout(function () {
        if (error !== true) {
            resolve({ name: "ThumarKeval", age: "19" })
        }
        else {
            reject("Error:Something went wrong")
        }
    }, 1000)
})

promise4
    .then(function (user) {
        console.log(user)
        return user.name
    })
    .then((name) => {
        console.log(name)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        // this will execute after both then and catch is executed`
        console.log(`Finally`)

    })

const promise5 = new Promise(function (resolve, reject) {
    const error = false
    setTimeout(function () {
        if (error !== true) {
            resolve({ name: "js", day: "16" })
        }
        else {
            reject("Error:Js went wrong")
        }
    }, 1000)
})

async function consumePromisAsync() {
    try {
        const response = await promise5
        console.log(response)
        console.log(response.name)
    } catch (error) {
        console.log(error)
    }
}
// consumePromisAsync()

// async functions with promises
async function showData() {
    try {
        const responce = await fetch('https://api.github.com/users/hiteshchoudhary')
        const data = await responce.json()
        console.log(data)
    } catch (error) {
        console.log("", "E:", error)
    }
}
// showData()

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((responce) => {
        return responce.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })


