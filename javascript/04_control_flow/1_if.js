// if statement
// the condition needs be true to execute the code inside, if it is false then the code should not be executed 

const temp = 200
if (temp < 50) {
    console.log("Temperature is lesser than 50");
}else {
    console.log("Temperature is greater than 50");
}

const score = 50
if (score <=100 && score >=90){
    let power = 'fly'
    console.log(`User power: ${power}`);
} else if (score <=89 && score >=80){
    let power = 'fire'
    console.log(`User power: ${power}`);
} else if(score <=79 && score >=70){
    let power = 'ice'
    console.log(`User power: ${power}`);
} else if(score <=69 && score >=60){
    let power = 'stretch'
    console.log(`User power: ${power}`);
} else {
    let power = 'fast'
    console.log(`User power: ${power}`);
}


const isLoggedIn = true
const debitCard = true
const gmailLogIn = true
const emailLogIn = true
if (isLoggedIn && debitCard){       //while using && operator, all conditions must be true to work
    console.log('Allowed to purchase.');
}
if (gmailLogIn || emailLogIn){         //while using || operator, if any one condition if true, it works
    console.log("User is logged in.");
}