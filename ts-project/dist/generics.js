"use strict";
const score = [];
const names = [];
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
//OR
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({})
//generics in array and arrow function
function getSearchProducts(products) {
    //database operations
    const myIndex = 3;
    return products[myIndex];
}
//generic arrow function
const getMoreProducts = (products) => {
    //database operations
    const myIndex = 5;
    return products[myIndex];
};
