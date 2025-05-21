//false values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truth values: "0", 'false', " ", [], {}, function(){}   (anything iinside a string is truth value)

const email = []
if (email) {
    console.log('Email available');
}else{
    console.log('Email unavailable');
}

//checking if an array is empty or not
if (email.length === 0) {
    console.log('Array is empty.');
    
}

//checking if an object is empty or not
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


//Nullish Coalescing Operator (??): null, undefined
let val1;
//val1 = 5 ?? 8
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


//Terniary Operator -- condition ? true : false
const teaPrice = 65
teaPrice <= 50 ? console.log('less than 50'): console.log('more the 50');

