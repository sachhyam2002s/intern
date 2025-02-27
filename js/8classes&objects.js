//objects - an entity having state and behavior (properties and methods)
//js objects have a special property called prototype
//prototype itself is an object which contains different properties and  methods 

const employee = {
    calcTax(){
        console.log("Tax rate is 10%");        
    },
};
const dominic ={
    salary:50000,
    calcTax(){
        console.log("Tax rate is 20%");        
    },
};
const vinn ={
    salary:50000,
};
const hobbs ={
    salary:50000,
};
dominic.__proto__ = employee;          //setting prototype employee inside dominic
vinn.__proto__ = employee;          //setting prototype employee inside vinn
hobbs.__proto__ = employee;          //setting prototype employee inside hobbs

//classes in js is a program-code template for creating objects that have some variables & some functions inside it

class car{
    constructor(){
        console.log("creating new object");     //creating own constructor
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
        
    }
}
let ferrrari = new car("ferrari");
let bugatti = new car("bugatti"); 