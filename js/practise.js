function add(a, b) {
    return a + b;
}
const result = add (5, 6)
console.log(result);


const square = x => {
   return  x * x;
}
console.log(square(5));

function greet(name = "guest") {
    return `Hello ${name}`
}
console.log(greet());

//checking even or odd using function
function EvenOrOdd(num) {
    if (num % 2 == 0){
        console.log(`${num} is even`);
    }else {
        console.log(`${num} is odd`);
    }
}
EvenOrOdd(5)
EvenOrOdd(8)
//Or
function OddOrEven(num) {
    return (num % 2 == 0) ? "Even" : "Odd"
}
console.log(OddOrEven(7));
console.log(OddOrEven(6));
//using arrow functon
const checkEvenOrOdd = (num) => {
    if (num % 2 == 0){
        console.log(`${num} is even`);
    }else {
        console.log(`${num} is odd`);
    }
}
checkEvenOrOdd(4)
checkEvenOrOdd(3)
