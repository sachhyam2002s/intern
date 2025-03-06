const name = "dune" //declaring string
const reposCount = 50
console.log(`Hello my name is ${name} and my repository count is ${reposCount}`);

const gameName = new String('dune-Gn')       //another way to declare string

console.log(gameName[0]);   //accessing key 0 of the variable
console.log(gameName.__proto__);   //accessing prototype of the variable
console.log(gameName.length);   //shows the length of the variable
console.log(gameName.toUpperCase());   //turns variable's alphabet to capital letters
console.log(gameName.charAt(2));   //checking the character availabe at the position 2
console.log(gameName.indexOf('n'));   //checking the position of the character 'n'

const newString = gameName.substring(0, 5)      //substring provides us the values from 0-4, not 5
console.log(newString);

const anotherString = gameName.slice(-4,7)   //slice can get negative value
console.log(anotherString);

const newStringOne = "     dune    "
console.log(newStringOne);
console.log(newStringOne.trim());   //trim() removes the unnecessay spaces available at the start and the end

const url = "https://dune.com/dune%20Gn"       //%20 is space in urln coding
console.log(url.replace('%20', '-'));   //replaces '%20' with '-' which denotes space

console.log(url.includes('dune'));  //asking if the keyword 'dune' is available or not in the url

console.log(gameName.split('-'));   //splits the keywords according to provided value '-'

//many more string methods available 