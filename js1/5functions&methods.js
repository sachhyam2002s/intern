//functions

function myFunctionName(){
    console.log("Hello world.");
    console.log("I am learning JS.");
}
myFunctionName(); //function call
//OR
function myFunction(msg){
    console.log(msg);
}
myFunction("Hello world. I am learning JS.")

//function > 2numbers, sum
function sum(x, y){
    console.log(x+y);
}
sum(20,8);

//using return call
function sumof(a, b){
    s = a + b;
    return s;    
}
let val = sumof(16,8);
console.log(val);

//arrow functions
const arrowSum = (a,b) => {
    console.log(a+b);
}
arrowSum(2,4);

//--------------------------------------------------------

//forEach can be used only in  Arrays not in strings
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {  //value at each index
    console.log(val);
});

let arrCity = ["patan", "bhaktapur", "thecho", "dhapakhel", "jawlakhel"];
arrCity.forEach((val) => {    //using arrow function
    console.log(val.toUpperCase());
});

//What is higher order function/method?
//-- Those function that take other functions as a parameter or return other function is known as HOF/M. for eg. forEach

//map method -- arr.map(callbackFnx(value, index, array))
let nums = [2, 4, 6, 8, 1];
nums.map((val) => {
    console.log(val);
});

//filter method
let array = [3, 5, 2, 4, 7, 6, 8, 1];
let evenArr = array.filter((val) => {
    return val % 2 == 0;
});
console.log(evenArr);

//reduce method
let array1 = [1, 2, 3, 4, 5];
const output = array1.reduce((res, cur) => {
    return res + cur;   //getting highest number 
});
console.log(output);
//AND
let array2 = [6, 8, 7, 1, 2, 3, 4];
const output2 = array2.reduce((prev, cur) => {
    return prev > cur ? prev : cur;    //using ternary operator to find the largest number
});
console.log(output2);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//##P R A C T I C E##

// Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.
function countVowels (str){
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" ||  char === "o" ||  char === "u"){
            count++;
        }
    }
    return count;
}

// Create an arrow function to perform the same task
const countVow = (str) => {
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" ||  char === "o" ||  char === "u"){
            count++;
        }
    }
    return count;
}

// For a given array of numbers, print the square of each value using the forEach loop.
let num = [2, 4, 6, 8, 1];
num.forEach((num) => {
    console.log(num*num);    //num**2
})

//We are given array of marks of students. Filter out of the marks of students that scored 90+.
let marks = [50, 98, 89, 90, 95, 72, 86];
let toppers = marks.filter((val) => {
    return  val>=90;
});
console.log(toppers);

//Take a number n as input from user. Create an array of numbers from 1 to n. 
// i. Use the reduce method to calculate sum of all numbers in the array. 
// ii. Use the reduce method to calculate product of all numbers in hte array.
//---
let n = prompt("Enter a number:")
let arr0 = [];
for(let i=1; i<=n; i++){
    arr0[i-1] = i;
}
console.log(arr0);
//---
let sum0 = arr0.reduce((prev, curr) => {
    return prev + curr;
})
console.log("sum = ",sum0);
//---
let factorial0 = arr0.reduce((res, curr) => {
    return res * curr;
})
console.log("factorial = ",factorial0);


