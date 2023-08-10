
const coding = ["javascript", "cpp", "python", "c", "dart", "swift"]

const values = coding.forEach((element) => {
    // console.log(element)
    return element // It is does not work in this tpye of return
});

// console.log(values) 
//forEach loop never return enything to solve this type of problam we use filter


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/**
 * 
1)   const newMyNums = myNums.filter((nums) => nums > 4);
2)   const newMyNums = myNums.filter((nums) => {
        return nums > 4
           })        
3)        const newMyNums = []
           myNums.forEach((nums) => {
               if (nums > 4) {
                   newMyNums.push(nums)
               }
           })
*/

const users = [
    {
        name: "keval",
        DOB: 2003,
        age: 19,
        game: "Free-fire"
    },
    {
        name: "meet",
        DOB: 2007,
        age: 19,
        game: "Free-fire"
    },
    {
        name: "aman",
        DOB: 1970,
        age: 53,
        game: "BGMI"
    },
    {
        name: "alvish",
        DOB: 1996,
        age: 27,
        game: "BGMI"
    },
    {
        name: "vasu",
        DOB: 2003,
        age: 19,
        game: "Free-fire"
    },
    {
        name: "kashyap",
        DOB: 2002,
        age: 20,
        game: ""
    },
    {
        name: "Mihir",
        DOB: 2005,
        age: 17,
        game: "Free-fire"
    },
    {
        name: "laxit",
        DOB: 2004,
        age: 18,
        game: "Free-fire"
    },
]

let newMyNums = users.filter((user) => user.DOB > 2000 && user.game === "Free-fire")
newMyNums = users.filter((user) => { return user.game === "BGMI" })
console.log(newMyNums)

