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
var logIn = function (name, age, email, isLoggedIn) {
    if (isLoggedIn === void 0) { isLoggedIn = true; }
};
logIn("Eren", 20, "eren@gmail.com");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return false;
}
var hello = function (s) {
    return "";
};
var heroes = ['ironman', 'spiderman', 'black widow', 'vision'];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
consoleError('There exist an error');
// export{}
