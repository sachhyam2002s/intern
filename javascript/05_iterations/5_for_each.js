const coding = ['js', 'cpp', 'rb', 'java', 'py']

//use function inside for each
coding.forEach( function (program) {
    console.log(program);
})

const heroes = ['ironman', 'spiderman', 'hawkeye', 'black widow']
heroes.forEach( (supe) => {       //using arrow function 
    console.log(supe);
})

function print(item) {
    console.log(item);
}
coding.forEach(print)


const fruits = ['apple', 'mango', 'kiwi', 'watermelon']
fruits.forEach( (item, index, arr) => {         //prints items, index of items and whole array list
    console.log(item, index, arr);
})


const language = [
    {
        name: 'javascript',
        file: 'js'
    },
    {
        name: 'typescript',
        file: 'ts'
    },
    {
        name: 'python',
        file: 'py'
    }
]
language.forEach( (item) => {
    console.log(item.name);     //prints name only
    console.log(item.file);         //prints file only
    console.log(item);                //prints the whole array
})
