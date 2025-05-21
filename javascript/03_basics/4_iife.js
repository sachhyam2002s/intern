//Immediately Invoked Function Expressions (IIFE)

(function iife(){           //named iife 
    console.log(`Wrap the function inside paranthesis () to immediately invoke the function`);
}) ();

// to end the code use semicolon ';' while writing 2 or more iife in a single file

( (name) => {           //simple/unnamed iife
    console.log(`${name} using arrow function`);
})('iife')