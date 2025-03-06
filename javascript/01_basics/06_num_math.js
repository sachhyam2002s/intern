// ******numbers****** //
const score = 500
console.log(score);
const balance = new Number(200)
console.log(balance);
console.log(balance.toString().length); //converting number to string and getting its length
console.log(balance.toFixed(2));    //gives the fixed value

const marks = 50.23445
console.log(marks.toPrecision(3));    //gives the precise value

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //makes it easier to count the number i.e. 1,000,000



// ******maths****** //

console.log(Math);  //Math itself is an object with many propertioes
console.log(Math.abs(-4));  //gives absolute value / changes negative to positive
console.log(Math.round(4.6));   //rounds up the value of '4.6 to 5'
console.log(Math.floor(4.8));   //


console.log(Math.random());   //gives random value from 0-1 only
console.log((Math.random()*10) + 1);   //math.random gives values from 0-1, when it multiplies by 10 values shift to left but some times 0.322 values are also given. So + 1 is added to it which means the value will be atleast 1, not 0

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //max-min means to get the range between the assigned numbers and +1 is added to avoid the 0 case and again min is added to get atleast the minimum value which is 10, not less 



