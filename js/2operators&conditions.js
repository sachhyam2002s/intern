//Operators
/*arithmetic operators = (+, -, *, / )
modulus = % (gives us the remainder)
exponentiation = ** (used for power ^)
increment = ++ (increases the number by 1)  //a++(post) & ++a(pre)
decerement = -- (decreases the number by 1)  //a--(post) & --a(pre)
*/

//-------------------------------------------------------------------

//Arithmetic operators
/*
let a = 5;
let b = 2;
console.log("a=",a, "& b=",b);
console.log("a+b=",a+b );
console.log("a-b=",a-b );
console.log("a*b=",a*b );
console.log("a/b=",a/b );
console.log("a%b=",a%b );
console.log("a**b=",a**b );
*/

//-----------------------------------------------------------------------

//Unary operator
/*
 post a++, a--
 pre ++a, --a
-----------------
let a = 5;
let b = 2;
console.log("a=",a, "& b=",b);
console.log("++a=",++a);
console.log("a++=",a++);
console.log("a=",a);
*/

//-------------------------------------------------------------------------

//Assignment operators
/*
let a = 5;
let b = 2;
a += 4; //a = a+4
b -= 5; //b = b-5
console.log("a =",a);
console.log("b=",b);
*/

//-------------------------------------------------------------------------

//Comparision orpeator
/*
equal to ==              equal to & type ===
not equal to !=         not equal to & type !==
--------------------

let a = 5;  //number
let b = 2; //number
let c = "5";  //string
console.log("5==2",a==b); // false
console.log("5!=2",a!=b); // true
console.log("5===5",a===c); // true but if the number is written as a string the result is false
console.log("5!==5",a!==5); // false
console.log("5>=5",a>=c); //true
console.log("5<=2",a<=b); //false
*/

//-----------------------------------------------------------------------

//Logical operators
/*
AND - &&        OR - ||         NOT - !
-------------------------
let a = 6;
let b = 2;
let c = 5;
let cond1 = a > b; //true
let cond2 = a === 6; //true
let cond3 = a < c; //false
-----------
console.log("cond1 && cond2", cond1 && cond2); //if both are true then the result is true 
console.log("cond2 && cond3", cond2 && a<c); 
console.log("cond1 && cond3", cond1 && cond3); //if any one of them is false then the result is false
-------------
console.log("cond1 || cond2", a < b || a===c); // if both are false then the result is false
console.log("cond1 || cond3", cond1 || cond3); // if any one of them is true then the result is true
-------------
console.log("!(6<5)=", !(a<c)) //if it is true then the result is false
console.log("!(2<5)",!(2<5)) //if it is false then the result is true
*/
 
//----------------------------------------------------------------------------------

//Conditional statements
/*
****if statement****
---{vote or not vote}---
let age = 25;
if (age >=18){
    console.log("you can vote");
}
if (age<18){
    console.log("you cannot vote");
}
---{black or white}---
let mode ="light";
let color;
if (mode === "dark"){
    color = "black";
}
if (mode === "light"){
    color = "white";
}
console.log(color);
-------------------------------
****if-else statement****
---{black or white}---
let mode ="light";
let color;
if (mode === "dark"){
    color = "black";
}else{
    color = "white";
}
console.log(color);
---{vote or not vote}---
let age = 25;
if (age >=18){
    console.log("you can vote");
}else{
    console.log("you cannot vote");
}
---{odd or even}---
let num = 10;
if(num%2 === 0){
    console.log(num,"is even");
}else{
    console.log(num,"is odd");
}
---------------------------
****else-if statement****
let mode = "dark";
let color;
if (mode === "dark"){
    color = "black";
}else if(mode === "blue"){
    color = "blue";
}else if(mode === "red"){
    color = "red";
}else{
    color = "white";
}
console.log(color);
*/

//--------------------------------------------------------------------------------

//Ternary operators 
/*
condition ? true output : false output
let age = 25;
let result = age >= 18 ? "adult" : "not adult"; // simpler/ compact if-else statement
console.log(result);
*/

//----------------------------------------------------------------------------------

//##P R A C T I C E

// Get user to input a number using prompt ("Enter a number:"). Check if the number is a multiple of 5 or not.
/*
let num = prompt ("Enter a number:");
if (num%5 === 0){
    console.log(num,"is multiple of 5");
} else{
    console.log(num,"is not a multiple of 5");
}
*/
//-------------------------------------------------------------------------------------------------------------------------------------
// Write a code which can give grades to students according to their scores:
/*
90-100, A
80-89, B
70-79, C
60-69, D
40-59, E
0-39, F

let score = 79;
if (score>=90 && score<=100){
    console.log("Student has obtained grade A",score);
}else if(score>=80 && score<=89){
    console.log("Student has obtained grade B",score);
}else if(score>=70 && score<=79){
    console.log("Student has obtained grade C",score);
}else if(score>=60 && score<=69){
    console.log("Student has obtained grade D",score);
}else if(score>=40 && score<=59){
    console.log("Student has obtained grade E",score);
}if(score<=39){
    console.log("Student has obtained grade F",score);
}

let grade;
if (score>=90 && score<=100){
    grade = "A";
}else if(score>=80 && score<=89){
    grade = "B";
}else if(score>=70 && score<=79){
    grade = "C";
}else if(score>=60 && score<=69){
    grade = "D";
}else if(score>=40 && score<=59){
    grade = "E";
}if(score<=39){
    grade = "F";
}
console.log("According to your scores, your grade is:", grade);
*/
