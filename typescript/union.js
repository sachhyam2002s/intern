"use strict";
let score = 33; //allows you to assign two or more datatypes  ' | '
score = 44;
score = "55";
let sasha = { name: "sasha", id: 25 }; //sasha can be user or admin
sasha = { username: "ss", id: 25 }; // assigning sasha as admin
function getDbId(id) {
    //making API calls
    console.log(`DB id is: ${id}`);
    if (typeof id === "string") { //checking if the tpye of id is string
        id.toLowerCase(); // for lowercase it needs to be string
    }
}
getDbId(3);
getDbId("3");
//array 
const data = [1, 2, 3]; //the array can either be all strings or all numbers
const data0 = [1, 2, "3", "dddd"]; // ()allows the array to be mixed of strings, numbers
const data1 = [1, 2, 3];
const data2 = ["1", "2", "3"];
//making it strict
let seatAllotment;
seatAllotment = "aisle";
//seatAllotment = "crew"   //doesnt allow seatAllotment to the crew 
