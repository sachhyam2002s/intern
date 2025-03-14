const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}
function identityTwo(val: any):any{
    return val
}

function identityThree<Type>(val:Type): Type{
    return val
}
identityThree("3")
//OR
function identityFour<T>(val:T):T {
    return val
}

interface Bottle{
    brand: string,
    type: number
}
// identityFour<Bottle>({})


//generics in array and arrow function
function getSearchProducts<T>(products: T[]): T{
    //database operations
    const myIndex = 3
    return products[myIndex]
}
//generic arrow function
const getMoreProducts = <T>(products: T[]): T => {
    //database operations
    const myIndex = 5
    return products[myIndex]
}