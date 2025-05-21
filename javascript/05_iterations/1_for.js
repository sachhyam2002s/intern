for (let index = 0; index <= 5; index++) {
    const element = index;
    if (element == 5) {
        console.log('5 is available'); 
    }
    console.log(element);    
}

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <=10; j++) {
//         console.log(i + '*' + j + '=' + i*j);
//         // console.log(`Inner loop value ${j} and inner loop ${i}`);
//     }
// }

let myArray = ['ironman', 'spiderman', 'hawkeye', 'black widow']
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}
console.log(myArray.length);    //checking the length of myArray


//break and continue
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log('5 detected');      //prints the output till 5 has been detected 
        break                                     //stops printing after 5
    }
    console.log(`Value of i is: ${i}`);
}
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log('5 detected');      //prints the output till 5 has been detected 
        continue                                     //continues printing after 5
    }
    console.log(`Value of i is: ${i}`);
}