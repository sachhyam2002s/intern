//asynchronous -- does not wait for previous instruction to be completed, allows next instruction to execute immediately
/*
console.log("hello");
console.log("hello");
console.log("hello");

function hello(){
    console.log("hello");
}
setTimeout(hello, 2000);    //2seconds = 2000miliseconds
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
calculator(1,5,sum);

//nesting
//if else nesting
let age = 19;
if(age>=18){
    if (age >= 60){
        console.log("senior");
    }else{
        console.log("adult");
    }
}else{
        console.log("child");
}
*/

//callback hell -- callback inside callback/nested callbacks
// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("success");
//             // reject("error");//
//             if (getNextData){
//                 getNextData();
//             }
//         }, 2000);
//     })
// }
// getData(1, () => {   //using callback to get data after 2sec, and another after next 2sec
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });

//promises -- to solve callback hells  /promise is an object in js which has 3 state: pending, resolved and reject
const getPromise = () => {
    return new Promise ((resolve,reject) => {
        console.log("I am a promise");
        resolve("success");
        // reject("error");
    });
};
let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled");    
});

promise.catch((err) => {   //to catch error in promise 
    console.log("rejected");    
});


//promise chaining
function asyncFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 1");
            resolve("success");
        },3000);
    });
}

function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 2");
            resolve("success");
        },2000);
    });
}

console.log("fetching data1...");
asyncFunc1().then((res)=> {
    console.log("fetching data 2...");
    asyncFunc2().then((res) => {});
}) ;


//async-await 
//async function always returns a promise
async function hello(){
    console.log("hello");
}
//await pauses the execution of its surrounding acync function until the promise is settled
//await can only be used inside async
function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        },2000)
    })
}
async function getWeatherData(){
    await api();  //1st turn
    await api();  //2nd turn
};
function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}
//using async-await
async function getAllData(){
    console.log("getting data..");
    await getData(1);
    console.log("getting data..");
    await getData(2);
    console.log("getting data..");
    await getData(3);
}