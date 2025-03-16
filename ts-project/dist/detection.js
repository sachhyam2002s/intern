"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
console.log(detectType("HELLO"));
console.log(detectType(7));
function provideId(id) {
    if (!id) {
        console.log("Please provide your ID");
        return;
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
//instanceof narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString);
    }
    else {
        console.log(x.toUpperCase);
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish food.";
    }
    else {
        pet;
        return "Bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    return shape.side * shape.side;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
