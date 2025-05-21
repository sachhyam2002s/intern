//for in for object
const languages = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    css: 'cascading stylesheet',
    py: 'python'
}
for (const key in languages) {
    console.log(`${key} shortcut is for ${languages[key]}`);        
}
// while using for in loop, to get the object as well as key, we need to write object[key] instead of only key

//using for in loop for array
const programming = ['js', 'cpp', 'rb', 'java', 'py']
for (const key in programming) {
    console.log(programming[key]);
}

//using for in loop for map -- map is not iterable, so it does not work
/*const map = new Map()
map.set('Nep', 'Nepal')
map.set('Eng', 'England')
map.set('Jpn', 'Japan')
map.set('Chn', 'China')
map.set('Kor', 'Korea')
for (const key in map) {
    console.log(map[key]);
}*/



