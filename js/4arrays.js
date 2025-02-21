//array is itself an object, are also mutable(can be changed)
/*
let marks = [97, 83, 49, 69, 59, 40];
console.log(marks);
console.log(marks.length);

let heroes = ["ironman", "hulk", "captain america", "black widow", "scarlet witch"];
console.log(heroes);
*/

//array indices -- arr[0], arr[2], arr[5]...
// marks[0] = 28; -- maks changes from 97 to 28.
//------------------------------------------------------

//looping over an array
/*
//for loop: length is needed
let superheroes = ["ironman", "hulk", "captain america", "black widow", "scarlet witch"];
for(let i = 0; i < superheroes.length; i++){
    console.log(heroes[i]);
}
----------------------------------------
//for of
let cities = ["patan", "dhapakhel", "lagankhel", "bhaktapur", "jawlakhel"];
for(let city of cities){
    console.log(city.toUpperCase());
}
*/

//--------------------------------------------------------------------------------------------------------------------

//arrays methods
// Push(): add to end
// Pop(): delete from end & return
// toString(): converts array to string



//--------------------------------------------------------------------------------------------------------------------


//##P R A C T I C E
/*
// for a given array with marks of students > [85, 97, 44, 37, 76, 60], find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let value of marks){
    sum += value;
}
let avg = sum / marks.length
console.log(`Avg marks of the class = ${avg}`);    

--------------------------------------------------------------------------------------------------------------------

//for a given array with prices of 5 items > [250, 645, 300, 900,50], all items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

let items = [250, 645, 300, 900,50];
let i = 0;
// for(let val of items){
//     let offer = val / 10;
//     items[i] = items[i] - offer; //items[i] -= offer
//     console.log(`Value of index ${i} = ${val}`);
//     console.log(`Value after offer = ${items[i]}`);
//     i++;
// }

for(let i=0; i<items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);
*/

//--------------------------------------------------------------------------------------------------------------------

