// while -- works according to the condition
let index = 0
while (index <=10) {
    console.log(`Valu of index is ${index}`);
    index += 2
}

let myArray = ['ironman', 'spiderman', 'hawkeye', 'black widow']
let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr += 1
}

//do while -- works first then checks the condition 
let score = 1       //if the number is greater than the condition even then the output is given 
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 8);