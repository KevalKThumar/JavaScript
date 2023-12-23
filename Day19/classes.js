class User {
    constructor(username, email, password) {
        this.password = password;
        this.username = username
        this.email = email
    }

    encreptPassword() {
        return `abc${this.password}abc`
    }

    changeUserName() {
        return `${this.password.toUpperCase()}`
    }
}
const setuser  = new User("Keval", "Keval@gmail.com", "12341234")
const keval = setuser.encreptPassword()
console.log(keval)

const password = setuser.changeUserName()
console.log(password)