/*
//onclick event
let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("btn1 was clicked");
};

//onmouseover event
let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div");
};

//--------------------------------
//event object -- to get additional information about the event
let btn2 = document.querySelector("#btn2");
btn2.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);    
    console.log(evt.target);    
    console.log(evt.clientX, evt.clientY);    
};
*/

//--------------------------------
//event listeners -- mostly use event listeners for any event
let btn1 = document.querySelector("#btn1");
//addEventListener
btn1.addEventListener("click", (evt) => {     //event object can also be accessed through event listeners
    console.log("btn1 was clicked");
    console.log(evt);
    console.log(evt.type);    
    console.log(evt.target);
});
btn1.addEventListener("click", () => {
    console.log("btn1 was clicked here");
});

//removeEventListener
let btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", () => {
    console.log("btn2 was clicked 1");
});
btn2.addEventListener("click", () => {
    console.log("btn2 was clicked 2");
});

const click3 = () => {
    console.log("btn2 was clicked 3");
}
btn2.addEventListener("click", click3);

btn2.addEventListener("click", () => {
    console.log("btn2 was clicked 4");
});

btn2.removeEventListener("click", click3); // removes event listener


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//##P R A C T I C E##

// Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

let modebtn = document.querySelector(".mode");
let body = document.querySelector("body");
let currMode = "light";

modebtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
    
})