let a = 2
if (true) {
    let a = 10
    const b = 20
    console.log("Inner variable: ", a);     //prints block scope 
}
console.log(a); //prints global scope
// console.log(b);


function one(){
    const username = "solo"
    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);   --causes an error because the parent cannot print/call children's properties
    two()
}
one()

if (true) {
    const username = 'javascript'
    if(username == 'javascript'){
        const website = ' youtube'
        console.log(username + website);
    }
    console.log(username);   //prints username
    // console.log(website);  --doesnot print website, sends error
}
// console.log(username); --doesnot print website, sends error


function addOne(num){
    return num + 1
}
console.log(addOne(5));


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));
