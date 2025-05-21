//for of loop for array 
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

// const greetings = ['hello', 'hi', 'good morning', 'welcome']
const greetings = "Learn Javascript"
for (const greet of greetings) {
    // console.log(`Alphabet is ${greet}`);
}


//for of for map -- prints unique values, doesnot print if the are duplicates
const map = new Map()
map.set('Nep', 'Nepal')
map.set('Eng', 'England')
map.set('Jpn', 'Japan')
map.set('Chn', 'China')
map.set('Kor', 'Korea')
// console.log(map);
for (const [key, value] of map) {       // [] lets us print the key and value seperately
    console.log(key, '=>', value);
}

//for of for object is not working -- another method is needed to iterate objects i.e. for in 
/*const outDoor = {
    game1: 'basketball',
    game2: 'football',
    game3: 'volleyball',
    game4: 'cricket',
    game5: 'tennis',
}
for (const [key, value] of outDoor) {
    console.log(key, ":", value);
}*/
