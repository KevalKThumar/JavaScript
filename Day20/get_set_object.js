const User = {
    _email: "thumarkeval12@gmail.com",
    _password: "Keval123@",
    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        return this._email
    },
    get password() {
        return this._password.toUpperCase()
    },

    set password(value) {
        return this._password
    }
}

const keval = Object.create(User)

console.log(keval.password)
console.log(keval.email)