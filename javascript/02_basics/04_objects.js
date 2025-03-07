//singleton object  -   const user = new Object()

const instaUser = {}

instaUser.id = "123abc"
instaUser.name = "son"
instaUser.isLoggedIn = "false"
console.log(instaUser);

//objects inside objects
const regularUser = {
    email: "one@gmail.com",
    fullname: {
        userfullname: {
            firstname: "one",
            lastname: "two"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);   //accessing objects inside object

//combining object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "g", 4: "v"}
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

//array of object
const users = [
    {
        id: 1,
        email: "user@email.com"
    },
    {
        id: 1,
        email: "user@email.com"
    },
]
users[1].email
console.log(instaUser);

console.log(Object.keys(instaUser));       //getting keys of instauser
console.log(Object.values(instaUser));       //getting values of instauser




//destructuring object
const course = {
    name: "JS in hindi",
    price: "599",
    courseInstructor: "hitesh"
}
// course.courseInstructor
const {courseInstructor: instructor} = course   //destructuring courseInstructor
console.log(instructor);    //printing courseInstructor using instructor only

/*destructuring in react
const navbar = ({company}) => {

}
navbar(company = "abc")
*/

//api in json format for object
// {
//     "name": "abc",
//     "course": "bca",
//     "price": "500000"
// }

//api in json format for array 
// [
//     {},
//     {},
//     {}
// ]