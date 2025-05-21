//arrays itself is an object and are always written inside square bracket [ ]
//to store multiple items inside a single variable
const myArr = [1, 2, 3, 4, 5]
console.log(myArr[4]);

//push, pop, unshift and shift
myArr.push(6, 7)       //adds value at end of array
myArr.pop()     //removes last value of array
myArr.unshift(0)        //adds value at start of array
myArr.shift()       //removes first value of array
console.log(myArr.includes(8)); //checks if the value is inside the array or not 
const newArr = myArr.join()     //binds array and converts it to string
console.log(myArr);
console.log(newArr);

console.log("A", myArr);    //original array

//slice and splice
const myn1 = myArr.slice(1, 3)  //prints 1st and 2nd value but not 3rd
console.log(myn1);
console.log("B", myArr);    //used slice

const myn2 = myArr.splice(1, 3)     //prints requested value 3rd also removes those values from array
console.log(myn2);
console.log("C", myArr);    //used splice
