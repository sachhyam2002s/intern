// ******Operations****** //

let score = "28";
console.log(typeof score);
console.log(typeof (score));
let valueInNumber = Number(score)   //converts string,boolean to number
console.log(typeof valueInNumber);
console.log(valueInNumber);
// "28" => 28
// "28ab" => NaN
// true => 1;   false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) //converts sting,number to boolean
console.log(booleanIsLoggedIn);
// 1=> true; 0 => false
// "" => false
// "seol" => true

let someNumber = 28
let stringNumber = String(someNumber)   //converts number,boolean to sting
console.log(stringNumber);
console.log(typeof stringNumber);



// ******Operations****** //

let value = 3
let negValue = -value;  //turning positive to negative
console.log(negValue);

let str1 = "hello"
let str2 = " seol"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);   //string + number = string number
console.log(1 + "2");   //number + string = number string
console.log("1" + 2 + 2);   //string + number + number = string number number
console.log(1 + 2 + "2");   //number +number + string = addednumber string

console.log((3 + 4) * 5 % 6);   //always use parenthesis ()

//never use below methods, makes it harder to read
console.log(+true);
console.log(+"");
let num1, num2, num3
num1 = num2 = num3 = 2 +2

// ++prefix and postfix++
let gameCounter = 100
gameCounter++;  //++gameCounter
console.log(gameCounter);


