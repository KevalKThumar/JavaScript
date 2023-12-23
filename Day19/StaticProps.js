class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`UserName is : ${this.username}`)
    }

    static createId() {
        return `1234432`
    }
}

class Teacher extends User {
    constructor(username, course, expertise) {
        super(username)
        this.course = course
        this.expertise = expertise
    }

    showInfo() {
        console.log(`${this.username} is teaches ${this.course} course and it has an expertise on ${this.expertise}`)
    }

}


const keval = new Teacher("keval", "javaScript", "flutter")
keval.showInfo()
const kt = new User("keval")
// console.log(`${keval.createId()}`)
console.log('kt', typeof (User))
console.log(keval instanceof User)