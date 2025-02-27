//array is itself an object, are also mutable(can be changed)

let  marks1= [97, 83, 49, 69, 59, 40];     // 1D array
//let marks2 = [["apple", "orange"], ["cabbage", "spinach"], ["raspberry", "strawberry"]];    // 2D array is used to store array inside array
console.log(marks1);
console.log(marks1.length);

let heroes = ["ironman", "hulk", "captain america", "black widow", "scarlet witch"];
console.log(heroes);

//array indices -- arr[0], arr[2], arr[5]...
// marks[0] = 28; -- marks changes from 97 to 28.
//------------------------------------------------------

//looping over an array

//for loop: length is needed
let superheroes = ["ironman", "hulk", "captain america", "black widow", "scarlet witch"];
for(let i = 0; i < superheroes.length; i++){
    console.log(heroes[i]);
}
//----------------------------------------
//for of
let cities = ["patan", "dhapakhel", "lagankhel", "bhaktapur", "jawlakhel"];
for(let city of cities){
    console.log(city.toUpperCase());
}

//--------------------------------------------------------------------------------------------------------------------

//arrays methods

let fruits = ['peach', 'apple', 'mango', 'litchi'];
fruits.push("orange", "watermelon");            // Push(): add to end
fruits.unshift("pineapple");            //unshift(): add to start
console.log(fruits);

let deletedItem = fruits.pop();         // Pop(): delete from end & return
let deletedItem2 = fruits.shift();             //shift(): deletes fron start
console.log(fruits);
console.log("deleted=", deletedItem);
console.log("deleted=", deletedItem2);


let foods = ['peach', 'apple', 'mango', 'litchi'];
let price = [90, 50, 66, 87];
console.log(foods);
console.log(foods.toString());          // toString(): converts array to string
console.log(price.toString());          // toString(): converts array to string

//concat(): joims multiple arrays and returns the result
let marvel_1 = ["spiderman", "ironman", "black panther", "black widow"];
let marvel_2 = ["captain america", "antman", "hawkeye", "scarlet witch"];
let marvel = marvel_1.concat(marvel_2); // multiple concat (marvel_2, marvel_3, ...)
console.log(marvel);
console.log(marvel.toString());

//slice(): returns a piece of array
console.log(marvel.slice(1,3)); //prints 1st and 2nd only, not 3rd

//splice(): change original array(add, remove, replace)
let num = [1, 2, 3, 4, 5, 6, 7, 8];
num.splice(2, 2, 10, 11); // delete as well as add
num.splice(2, 0, 101)  // add element only (index, elements to delete, value to add) 
num.splice(3, 1) //delete element only 
num.splice(3, 1, 102) // replace element
console.log(num);


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//##P R A C T I C E##

// For a given array with marks of students > [85, 97, 44, 37, 76, 60], find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let value of marks){
    sum += value;
}
let avg = sum / marks.length;
console.log(`Avg marks of the class = ${avg}`);    


// For a given array with prices of 5 items > [250, 645, 300, 900,50], all items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let items = [250, 645, 300, 900,50];
/*
using for of loop
let i = 0;
for(let val of items){
    let offer = val / 10;
    items[i] = items[i] - offer; //items[i] -= offer
    console.log(`Value of index ${i} = ${val}`);
    console.log(`Value after offer = ${items[i]}`);
    i++;
}
*/
//using for loop
for(let i=0; i<items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);


/*
// Create an aray to store companies > "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
a. remove the first company from the array
b. remove uber & add ola in its place
c. add amazon at the end 
*/
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
companies.shift();
companies.splice(1, 1, "Ola");
companies.push("Amazon");
console.log(companies);