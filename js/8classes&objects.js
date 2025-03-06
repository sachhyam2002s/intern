//objects - an entity having state and behavior (properties and methods)
//js objects have a special property called prototype
//prototype itself is an object which contains different properties and  methods 

const employee = {    //employee is an object
    calcTax(){
        console.log("Tax rate is 10%");        
    },
};
const dominic ={    //dominic  is an object
    salary:50000,
    calcTax(){
        console.log("Tax rate is 20%");        
    }
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
    constructor(brand, mileage){
        console.log("creating new object");     //creating own constructor
        this.brand = brand;
        this.mileage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
        
    }
}
let ferrari = new car("ferrari",5);
console.log(ferrari);

let bugatti = new car("bugatti", 6); 
console.log(bugatti);


//inheritance in js 
class person{
    constructor(){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eats");
    }
    sleep(){
        console.log("sleeps");
    }
}
class teacher extends person{
    assignment(){
        console.log("gives assignment");        
    }
}
class doctor extends person{
    treats(){
        console.log("terats patient");        
    }
};
let teacher = new teacher();
let doctor1 = new doctor();


//method overriding -- when a child class provides a different implementation of a method that is already defined in the parent class. The child class replaces the parent's method with its own version.

//super keywords -- calls the constructor of its parent class to access the parent's properties and methods
class human{
    constructor(){
        console.log("enter parent constructor");
        this.species = "homo sapiens";
    }
    eat(){
        console.log("eats");
    }
}
class boy extends human{
    constructor(branch){
        console.log("enter child constructor");
        super(human);   //to invoke parent class constructor       super keyword is imp when using inheritance 
        this.branch = branch;
        console.log("exit chlid constructor");
    }
    sleep(){
        console.log("sleeps");        
    }
}
let guy = new boy("listens music");



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//##P R A C T I C E##

// You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData() that allows user to view website data.
let data = "information";
class User{
    constructor(name,email){
        this.name= name;
        this.email= email;
    }
    viewData(){
        console.log("users data =", data);
    }
};
let student1 = new User("solo","sol@gmail.com");
let student2 = new User("gary","gary@gmail.com");
let teacher1 = new User("lary","larythedean@gmail.com");

//Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data = "new data";
        
    }
}
let admin1 = new admin("admin","admin@gmail.com");