"use strict";
//const score: Array<number> = []
//const names: Array<string> = []
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree("3");
//OR         T or Type works with string, numbers, booleans, etc also objects too
function identityFour(val) {
    return val;
}
const bottle = identityFour({ brand: "coca-cola", type: 1 });
console.log(bottle);
console.log(identityOne(9));
console.log(identityTwo(5));
console.log(identityThree("3"));
const numberBox = { content: 42 };
const stringBox = { content: "Hello" };
console.log(numberBox.content);
console.log(stringBox.content);
//generics in array and arrow function
function getSearchProducts(products) {
    //database operations
    const myIndex = 3;
    return products[myIndex];
}
const numbers = [2, 4, 6, 7, 8];
const result = getSearchProducts(numbers);
console.log(result);
//generic arrow function with an array
const getMoreProducts = (products) => {
    //database operations
    const myIndex = 5;
    return products[myIndex];
};
const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
const result2 = getMoreProducts(fruits);
console.log(result2);
function aFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
const database = aFunction(3, { connection: "connected", username: "sss", password: "sss" });
console.log(database);
//generic class
class sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
