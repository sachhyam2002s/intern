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
