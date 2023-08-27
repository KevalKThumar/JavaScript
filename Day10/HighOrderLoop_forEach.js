const coding = ["javascript", "cpp", "python", "c", "dart", "swift"]

coding.forEach(function (language) {
    // console.log("I love to code in  " + language)
})
const name = (language, index, coding) => {
    // console.log(language, index, coding)
}
coding.forEach(name)

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"

    },
    {
        languageName: "dart",
        languageFileName: "dart"

    },
    {
        languageName: "java",
        languageFileName: "java"

    },
    {
        languageName: "typeScript",
        languageFileName: "jsx"

    },
    {
        languageName: "python",
        languageFileName: "py"

    }
]

myCoding.forEach((item) => {
    console.log(`${item.languageFileName} is for ${item.languageName}.`)
})