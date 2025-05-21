//to run program at terminal:    'node ./js2/01_variables.js'

const accountId = 1234      //const cannot be changed
let accountEmail = "hello@gmail.com"        //let can be changed
var accountPassword = "1234"
accountCity = "Patan"
let accountState;  // ; doesnot matter if used or not 

//accountId = 2 // not allowed to change const

accountEmail = "hi@gmail.com"
accountPassword = "4321"
accountCity = "Thecho"

console.log(accountId);

/*
Prefer not to use var beacuse of isue in block and functional scope i.e {}
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
