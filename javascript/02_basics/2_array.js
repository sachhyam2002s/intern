const marvel_heroes = ['ironman', 'spiderman', 'black widow', 'vision']
const dc_heroes = ['superman', 'batman', 'flash', 'wonder women']

const heroes = marvel_heroes.concat(dc_heroes)  //combines two or more arrays
console.log(heroes);

//spread operator -- combines all assigned arrays 2,3 or many more 
const allHeroes = [...marvel_heroes, ...dc_heroes]  //using '...' each element inside an array becomes independent element
console.log(allHeroes);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [3, 4]]]
const fixed_anotherArr = anotherArr.flat(Infinity)  //flat combines all arrays inside array into a single array
console.log(fixed_anotherArr);

console.log(Array.isArray("Hollo"));    //checking whether Hollo is an array or not
console.log(Array.from("Hollo"));       //converts objects, string into array
console.log(Array.from({name: "Howard"}));  //need to assign if we need array of keys / values, if not informed it give an empty result

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
