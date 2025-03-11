function addTwo(num: number){
    return num + 2
}
addTwo(5)   //adding 2 to the value 5

function getUpper(val: string) { 
    return val.toUpperCase()
}
getUpper("5")

function signUp(name: string, age: number, email: string, isLoggedIn: boolean){
}
signUp("Sasha", 22, "sasa@gmail,com", true)

let logIn = (name: string, age: number, email: string, isLoggedIn: boolean = true) => {
}
logIn("Eren", 20, "eren@gmail.com")

function getValue(myVal: number){
    if (myVal > 5){
        return true
    }
    return false;
}


const hello = (s: string):string => {
    return ""
}

const heroes: string[] = ['ironman', 'spiderman', 'black widow', 'vision']
heroes.map(hero => {
    return `hero is ${hero}`
})


function consoleError(errmsg: string): void{        //void does not return any value
    console.log(errmsg);
}
function handleError(errmsg: string): never{        //never does not return any value
    throw new Error(errmsg);
}
consoleError('There exist an error');

export{}