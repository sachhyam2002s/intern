//for loop
/*
****print 1 to 5**** 
for (let i=1; i<=5; i++){
    console.log("i =", i);
}
-----------------------
****calculate sum of 1 to 5****
let sum = 0;
let n = 10;
for (let i=1; i<=n; i++){
    sum = sum + i;
}
console.log("sum =", sum);
*/

//-------------------------------------------------------------------
//infinite loop - never use infinite loop (let i=1; i>=0; i++)
//-------------------------------------------------------------------

//while loop
/*
let i = 0;
while(i<=10){
    console.log("i =", i);
    i++;
}
*/

//---------------------------------------------------------------------------

//do while loop
/*
let i = 20;
do{
    console.log("Hello world");
    i++;
}while(i<=10);
-------------------
let i=1;
do{
    console.log("i=", i);
    i++;
}while(i<=5);
*/

//------------------------------------------------------------------------

//for-of loop  -- used only for string and arrays not for objects
/*
let str = "Hello world";

let size = 0;
for (let i of str){
    console.log("i=",i);
    size++;
}
console.log("string size=",size);
*/

//--------------------------------------------------------------------------

//for-in loop -- used for objects and arrays
/*
let student = {
    name: "Shait Shrestha",
    age: 20,
    cgpa: 8.5,
    isPass: true,
}
for (let info in student){
    console.log(info, "value=",student[info]);
}
*/

//---------------------------------------------------------------------------------------------------------------

//strings -- are immutable(cannot be changed)
/*
let str = "Javascript";
let str2 = 'Typescript';
console.log(str[0],str[1], str[5]);
console.log(str2[2],str2[4], str2[0]);
*/

//-------------------------------------------------------------------------------------------------

//template literals (`string text ${expression / variables} string text `)
/*
let specialString = `this is a template literal ${1+2+3}`;
console.log(specialString);

let obj = {
    item: "pen",
    price: 10,
}
let output = `the cost of ${obj.item} is ${obj.price} rupees`; //in this template literals ${} is variable 
console.log(output);
console.log("the cost of ", obj.item, "is",obj.price, "rupees");

------------------------------------------------------------------------------------

//escape characters -- \n \t
console.log("Java\nscript");  // here \n seperates the script from java into the next line
console.log("Java\tscript");  // here \t gives a tab space 

let str = "Java\tscript";
console.log(str.length);
*/

//---------------------------------------------------------------------------------------------------------------------------------------

//string methods/functions

let str = "JavaScript";
str = str.toUpperCase(); //transform every letter of the string to uppercase
console.log(str);

let str1 = "JavaScript";
// str = str.toLowerCase(); 
console.log(str1.toLowerCase());  //transform every letter of the string to lowercase

let str2 = "     Learn      Java Script    "
console.log(str2.trim()); // removes every spaces at the start and the end

let str3 = "012345678";
console.log(str3.slice(2, 6)); //breaks the string and returns the requested string but does not provide te end request

let str4 = "Java";
let str5 = "Script";
let result1 = str4.concat(str5); // lets you combine the strings
let result2 = "I am learning " + result1;  //"I am learning " + str4 + str5
console.log(result1);
console.log(result2);

let str6 = "hello";
console.log(str6.replace("lo","p")); //replaces the words 

let str7 = "IlearntJS";
console.log(str7.charAt(8)); //searches the character using the number 


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//##P R A C T I C E##

// Print all odd numbers from 0 to 100.

for (let i=0; i<=100; i++){
    if(i%2 !== 0){
        console.log("i=",i);
    }
}


// Create a game where you start with any random game number. Ask the user to keep guessing the number until the user enters correct value

let gameNum = 20;

let userNum = prompt("Guess the game number:");

while(userNum != gameNum){
    userNum = prompt("You entered wrong number. Guess again:");
}
console.log("Congratulations, you guessed the right number.");


// Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their name and ending with the fullname length.
//eg: full name = "sachhyamshrestha", username should be "@sachhyamshrestha16"

let fullName = prompt("Enter your full name without spaces:");

let username = "Your username is @" +fullName + fullName.length;
console.log(username);
 