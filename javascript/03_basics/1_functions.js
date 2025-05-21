function sayMyName( ) {
    console.log("S");
    console.log("O");
    console.log("L");
    console.log("O");
    console.log("S");
}
sayMyName( )

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result
    // return number1 + number2
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);


function loginUserMessage(username){
    if (!username) {
        console.log("Please enter a username");    
    }
    return `${username} logged in`
}
console.log(loginUserMessage("Solos"))


function calculateCartPrice(...num1) {  //... represents rest operator --accept all arguments into an array
    return num1
}
console.log(calculateCartPrice(2, 4, 6, 100));

const user = {
    username: "solos",
    price: 200
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)   
//Or
handleObject({          //can directly pass the object as well
    username: "son",
    price: 299
})

const myNewArray = [2, 3, 5, 5, 6]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

