

function sayMyName( ) {
    console.log("S");
    console.log("O");
    console.log("L");
    console.log("O");
    console.log("S");
}
sayMyName( )

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}
function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result

    // return number1 + number2
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);


function loginUserMessage(username){
    return `${username} logged in`
}
console.log(loginUserMessage("Solos"))