function User(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email
        },
        set: function (value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function () {
            return `2345gfd213e${this._password}532gfdvc32`
        },
        set: function (value) {
            this._password = value
        }
    })

}

const keval = new User("thumarkeval@12gmail.com", "keval123@")

console.log(keval.password)
console.log(keval.email)

