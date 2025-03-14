"use strict";
/*
class User {
    readonly name: string       //readonly allows to access name but bans from changing the data/value of name
    private email: string           //private key doesnot allow to access the value of email
    public address: string = ""  //public is automatic
    constructor (name: string, email: string){
        this.name = name;
        this.email = email
    }
}
const connie = new User("connie", "con@nie.com")
connie.address = "New york"
connie.name        //accessing name
//connie.name = "ricket"  //try to change name but cannot due to readonly
//connie.email        //cannot access email as it is in private
*/
//simple way to write above details in ts
class User {
    constructor(name, email, userId //private poperty
    ) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this._courseCount = 1; //is accessible in the assigned class and inherited class
        this.address = ""; //optional
    }
    deleteToken() {
        console.log("Token deleted");
    }
    //getter
    get getEmail() {
        return `your ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //setter - there should be no written type(string, number, etc)
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const griffith = new User("fetus", "fetus@berserk.com", 2);
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
