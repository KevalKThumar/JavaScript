// what is call in JS?
// Ans :- It is pass current execution context to the other function which is called it

// before pass this to the setUserName it will add userName in setUserName's this that will be flushout after it will execute

// To remove this problam we pass this as a first parameter of the caller function and writer .call to pass the current context

function setUserName(userName) {
    this.userName = userName
}

function setUser(userName, passWord, email) {
    setUserName.call(this, userName)
    this.passWord = passWord
    this.email = email
}

const keval = new setUser("keval", "keval@fb", "keval@fb.com")

console.log(keval)