// ******primitive datatypes****** //
// 7 types - string, number, boolean, null, undefined, symbol, bigint

let name = "clark"; //string
const score = 100;  //number
const isLoggeIn = false;    //boolean
const outsideTemp = null    //null
let userEmail;  //undefined
const id = Symbol('123')    //symbol
const anotherId = Symbol('123') //symbol
console.log(id == anotherId);
const bigNumber = 3845345453453453534n  //bigint - large numbers 


// ******non primitive(reference) datatypes****** //
// arrays, objects, functions

const heroes = ["spiderman", "ironman", "antman"]   //arrays
let myObjects = {     //objects
    name: "klaus",
    age: 28
}
const myFunction = function(){      //functions
    console.log("Hello");
} 

console.log(typeof bigNumber);      //shows the variable's datatype

