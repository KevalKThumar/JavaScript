withOutVariable(5)
function withOutVariable(num1) {

    return num1 + 1;

}

withVariable(6)  //Cannot access 'withVariable' before initialization It call Hosting
const withVariable = function (num2) {

    return num2 + 2

}
const name = () => {

}
name();