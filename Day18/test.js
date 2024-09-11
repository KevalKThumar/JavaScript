const obj = {
    name: "keval",
    greet: function () {
        return this.name
    }
}

const fun = obj.greet
console.log(fun())

let cout=1;
for(let i=0; i<5;i++){
    for (let j = 0; j <= i; j++) {
        console.log(cout) 
        cout++;       
    }
}

// function Person(name){
//     this.name = name;
// }

// Person.prototype.greett = function(){
//     return this.name;
// }


// const p = new Person("keval")

// Person.prototype.greett = function () {
//     return `Hello ${this.name}`;
// }
// console.log(p.greett())


// function name(){
//     var a=9;
//     if (true) {
//         console.log(a)
//         const b =5;
//     }
//     console.log(b)
// }

// name()