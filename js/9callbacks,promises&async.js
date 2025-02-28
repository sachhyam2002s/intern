//asynchronous -- doent not wait for previous instruction to be completed, allows next instruction to execute immediately

console.log("hello");
console.log("hello");
console.log("hello");

function hello(){
    console.log("hello");
}
setTimeout(hello, 2000);    //2seconds = 2000mili
//or using arrow function
setTimeout(() => { 
    console.log("hello");
},4000);    //timeout

console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");


//callbacks -- a function passed as an argument to another function.
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b, sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum);