// ******stack(primitive) memory****** //
let firstName = "first"
let anotherName = firstName //copys firstName's name
anotherName = "second" //new name is given to anotherName but firstName remains same
console.log(firstName);
console.log(anotherName);


// ******heap(non-primitive) memory****** //
let userOne = {     //contents inside {} is stored in heap memory
    email: "userOne@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne   //gets userOne's data
userTwo.email = "userTwo@gmail.com" //changes both userOne and userTwo email
console.log(userOne.email);
console.log(userTwo.email);
console.log(userOne.upi);

