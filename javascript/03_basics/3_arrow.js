const user = {
    username: 'solo',
    price: '399',
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);      // this prints the full data of the variable
    }
}
user.welcomeMessage()
user.username = 'dual'
user.welcomeMessage()


function one(){
    let username = 'blue'
    console.log(this.username);     // shows undefined because we are not able to use 'this' inside function
}
one()

const two = () => {     //arrow function
    let username = 'blue'
    console.log(this); 
}
two()

//explicit return -- needs {} and return
const addnum = (num1, num2) => {
    return num1 + num2
}
console.log(addnum(2,3))

//implicit return -- no need of {} and return / code is written in same line
const addnum2 = (num1, num2) => num1+ num2
console.log(addnum2(3, 4));

// implicit for object -- needs to be wrapped inside paranthesis
const name = (user1) => ({username: 'super'})
console.log(name());

