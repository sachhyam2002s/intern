//singleton -- if an object is declared using constructor it is singleton object
//Object.create - constructor method


//object literals

const mySym = Symbol("key1")    //declaring symbol

const jsUser = {
    name: "Howard",
    [mySym]: "myKey1",  //to access symbol inside object use [ ]
    age: 20,
    location: "Paris",
    email: "howard@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(jsUser.email);      //. is used mostly to access the values
console.log(jsUser["email"]); //[ ] is used to access value in some special cases 
console.log(jsUser[mySym]);
console.log(typeof mySym);

jsUser.email = "hoddor@gmail.com"    //to change values
//Object.freeze(jsUser)   //locks the object, doesn't allow changes
console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello JS user");
}
jsUser.greetingAgain = function() {
    console.log(`Hello JS user, ${this.name}`);     //this allows you to access the properties of the object
}
console.log(jsUser.greeting());
console.log(jsUser.greetingAgain());
