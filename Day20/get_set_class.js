class User {

    constructor(email, password) {
        this.email = email
        this.password = password
    }

    /*  if we use this then we will declear email or password tow time and give an error like 
             RangeError: Maximum call stack size exceeded
             at set email [as email] 
        To solve this error we write a _email and _password so that it will make a private variable     
        get email() {
            return this.email;
        }

        set email(value) {
            this.email = value
        }

        set password(value) {
            this.password = value
        }

        get password() {
            return this.password
        }
     */

    get _email() {
        return this._email;
    }

    set _email(value) {
        this._email = value
    }

    set _password(value) {
        this._password = value
    }

    get _password() {
        return this._password
    }

}

const keval = new User("thumarkeval12@gmail.com", "kevalthumar")

console.log(keval.password)
