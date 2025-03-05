//console.log(""); prints the message/input.
console.log("Welcome to js practise.");
console.log("Javascript is a programmng language.");

let fullName = "Solo";
let age = 24;
const pi = 3.14;
let price = 20.99;
let x = null;
let y = undefined;
let isFollowing = false;
let isNotFollowing = true;
console.log(fullName); //not to use "" so that the console can print the input 
console.log(age);
console.log(pi);
console.log(price);
console.log(x);
console.log(y);
console.log(isFollowing);
console.log(isNotFollowing);
 
//let, const, var keywords to declare variables
//do not use var, use let and const 
//'let' allows you to update the values whereas 'const' fixes the value, so that the value cannot be changed
 
const a = 5;
console.log(a);
// const need to be initialized


//{} represents block. code inside the curly bracket is a single block 
{
    let a = 5;
    console.log(a);
}
{
    let a = 10;
    console.log(a);
}

// Datatypes
// primitive - Number, String, Boolean, null, undefined, BigInt, Symbol
// non-primitive - Object

const student = {
    fullName : "Rohan Shrestha",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};
console.log(student.age);

student["age"] = student["age"]+1;
console.log(student["age"]);


const product = {
    pName: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 270,
};

console.log(product);

const profile = {
    profileName: "sohan",
    isFollow: true,
    posts: 150,
    followers: 500,
    following: 20,
    bio: "smoking weed"
};

console.log(typeof profile["posts"]);