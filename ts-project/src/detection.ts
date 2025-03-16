function detectType(val: number | string){
    if  (typeof val === "string"){
        return val.toLowerCase()
    }
    return val + 3
}
console.log(detectType("HELLO"));
console.log(detectType(7));

function provideId(id: string | null){
    if(!id){
        console.log("Please provide your ID");
        return
    }
}

// in operator narrowing
interface User{
    name: string,
    email: string
}
interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}
function isAdminAccount(account: User | Admin){
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}

//instanceof narrowing
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString);
    }else{
        console.log(x.toUpperCase);   
    }
}

type Fish = {swim: () => void};
type Bird = {fly: () => void};
function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if (isFish(pet)) {
        pet
        return "Fish food."
    }else{
        pet
        return "Bird food"
    }
}

//discriminated union
interface circle{
    kind : "circle",
    radius: number
}
interface square{
    kind : "square",
    side: number
}
interface rectangle{
    kind : "rectangle",
    length: number,
    width: number
}
type shape = circle | square
function getTrueShape(shape: shape){
    if (shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    }
    return shape.side * shape.side
}
function getArea(shape: shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side

        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}