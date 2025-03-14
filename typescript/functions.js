"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5); //adding 2 to the value 5
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("5");
function signUp(name, age, email, isLoggedIn) {
}
signUp("Sasha", 22, "sasa@gmail,com", true);
let logIn = (name, age, email, isLoggedIn = true) => {
};
logIn("Eren", 20, "eren@gmail.com");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return false;
}
const hello = (s) => {
    return "";
};
const heroes = ['ironman', 'spiderman', 'black widow', 'vision'];
heroes.map(hero => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
consoleError('There exist an error');
