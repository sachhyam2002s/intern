//const score: Array<number> = []
//const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}
function identityTwo(val: any):any{     //any removes type safety so use it with caution
    return val
}

function identityThree<Type>(val:Type): Type{
    return val
}
identityThree("3")
//OR         T or Type works with string, numbers, booleans, etc also objects too
function identityFour<T>(val:T):T {    
    return val
}

interface Bottle{
    brand: string,
    type: number
}
const bottle = identityFour<Bottle>({brand: "coca-cola", type: 1})
console.log(bottle);

console.log(identityOne(9))
console.log(identityTwo(5))
console.log(identityThree<string>("3"))

interface Box<T> {
    content: T;
}
const numberBox: Box<number> = { content: 42 };
const stringBox: Box<string> = { content: "Hello" };  
console.log(numberBox.content);
console.log(stringBox.content);
  


//generics in array and arrow function
function getSearchProducts<T>(products: T[]): T{
    //database operations
    const myIndex = 3
    return products[myIndex]
}
const numbers = [2, 4, 6, 7, 8 ]
const result = getSearchProducts<number>(numbers)
console.log(result);
//generic arrow function with an array
const getMoreProducts = <T>(products: T[]): T => {
    //database operations
    const myIndex = 5
    return products[myIndex]
}
const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
const result2 = getMoreProducts<string>(fruits);
console.log(result2);

interface database{
    connection: string,
    username: string,
    password: string
}
function aFunction<T, U extends database>(valOne:T, valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}
const database = aFunction(3, {connection:"connected", username:"sss", password:"sss"})
console.log(database);


interface quizz{
    name: string,
    type: string
}
interface course{
    name: string,
    author: string,
    subject: string
}
//generic class
class sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}
