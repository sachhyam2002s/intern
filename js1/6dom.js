//DOM manipulation

// alert("This is to learn JS only.")
console.dir(document);  //shows all the objects in the window

// selecting with id -- document.getElementById(" ")
let button = document.getElementById("submit");
console.dir(button);

//selecting with class -- document.getElementsByClassName(" ")
let headings = document.getElementsByClassName("heading");
console.dir(headings);

//selecting with tags -- document.getElementsByTagName(" ")
let pre = document.getElementsByTagName("pre");
console.dir(pre);

//query selector -- (id and class is always written with . 'period' infornt of them while using query selector)
let elements = document.querySelector(".heading"); //selects first element only
console.dir(elements);
let allElements = document.querySelectorAll("p");  //selects all element 
console.dir(allElements);

//properties  (used inside console)
/*
tagName:    returns tag for element nodes
innerText:  returns the text content of the element and all it's children
innerHTML:  returns the plain text or HTML contents in the element
textContent:    returns textual content even for hidden elements
*/

//---------------------------------------------------

//attributes
//getAttribute(" ") -- to get the attribute value
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id"); 
console.log(id);
let name = div.getAttribute("name");
console.log(name);

//setAttribute(" ") -- to change/update the attribute value
let para = document.querySelector("p");
console.log(para.setAttribute("class", "paragraph"));

let divid = document.querySelector("div");
divid.style.backgroundColor = "purple";
divid.style.fontSize = "20px";
divid.style.color = "white";
// divid.style.visibility = "hidden";

// ---------------------------------------------------------------

//insert elements
let btn = document.createElement("button");
btn.innerText = "submit";
console.log(btn);

// node.append(el) : adds at the end of the node
// node.prepend(el) : adds at the start of the node
// node.befor(el) : adds before the node
// node.after(el) : adds after the node
let div2 = document.querySelector("div");
div2.append(btn);

//node.remove(): removes the node



//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//##P R A C T I C E##

// Create a H2 heading with text -"Hello JavaScript". Append "from Java College students" to this text using JS.
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Java College students";

//Create 3 divs with common class name - "box". Access them & add some unique text to each of them.
let boxes = document.querySelectorAll(".box");

let idx = 1;
for(div of boxes){      //always prefer using loops while working on child nodes
    div.innerText = `unique ${idx}`;
    idx++;
}

// boxes[0].innerText = "unique 1";
// boxes[1].innerText = "unique 2";
// boxes[2].innerText = "unique 3";

console.log(boxes);

// Create a new button element.Give it a text "click me", background color of red & text color of white.
// Insert the button as the first element inside the body tag.
let newbtn = document.createElement("button");
newbtn.innerText = "click me";
newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";
document.querySelector("body").prepend(newbtn);

// Create a <p> tag in html, give it a class & some styling.
/* Now create a new class in CSS and try to append this class to the <p> element 
*/
