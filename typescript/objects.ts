// const user = {
//     name: "guts",
//     email: "guts@ber.serk",
//     isActive: true
// }
// function createUser({name: string, isPaid: boolean}){}
// let newUser = {name: "guts", isPaid: false, email: "sda@sda.com"}
// createUser (newUser)

// function createCourse ():{name: string, price: number} {
//     return {name: "reactjs", price: 299}
// }

//type aliases
// type User = {
//     name: string;
//     age: 30;
//     email: string;
//     isActive: boolean
// }
// function createUser(user: User){}
// createUser({name: "", age: 30, email: "", isActive: false})



type User = {
    readonly _id: string        //doesnt allow user to change the id
    name: string
    email: string
    isActive: boolean
    creditCard?: number     //? makes it optional- user can enter ceditcard details if they have/ dont need to add details 
}
let myUser: User = {
    _id: "1234",
    name: "dssfd",
    email: "asda@gmsda..com",
    isActive: false
}
myUser.email = "dhfs@gans.com"
// myUser._id = "ds"



type cardNumber = {
    cardNumber: string
}
type cardDate = {
   cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

