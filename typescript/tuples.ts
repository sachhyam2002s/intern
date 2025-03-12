const user: (string | number)[] = ["ss", 1]
//Or 
const user1: [string, number] = ["ss", 1]

let tuser: [string, number, boolean]
tuser = ["ss", 32, true]        //order of the array matters

let rgb: [number, number, number, ...number[]] = [255, 213, 123, 233 ,232, 232,233]     // ... using rest operator to define the tuple with variable number of elements

type user = [number, string, boolean]
const newUser: user = [121, "dsd@df.com", false]

newUser[1] = "aha"
newUser.push(true)

export {}