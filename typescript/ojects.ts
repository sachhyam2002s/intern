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
type User = {
    name: string;
    age: 30;
    email: string;
    isActive: boolean
}
function createUser(user: User){}
createUser({name: "", age: 30, email: "", isActive: false})

export {}