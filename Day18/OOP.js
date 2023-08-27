// Object literal 

const user = {
    userName: "Keval",
    isSingIn: true,
    loginCount: 8,
    getUserInfo: function () {
        console.log(this)
        return `userName:${this.userName}`
    }
}

console.log(`${user.getUserInfo()},isSingIn: ${user.isSingIn}}`)
console.log(this)