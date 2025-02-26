let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".new-game");
let message = document.querySelector(".message");
let msg = document.querySelector(".msg");

//selecting player
let turnO = true;     // player X, player O
let count = 0;

// patterrns for winning the game
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

//resets the game
const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes(); // enables the boxes again
    message.classList.add("hide"); // hides the message box again
};

//show content X/O when the box is clicked
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box is clicked");
        if(turnO){
            box.innerText = "O";  //player O
            turnO = false;  //next click is for player X
        }else{
            box.innerText = "X";  //player X
            turnO = true;  //next click is for player O
        }
        box.disabled = true;  //disables the clicked box, so that the content cannot be changed
        count++;

        let isWinner = checkWinner();  // checks for winner
        if (count === 9 && isWinner){
            gameDraw();
        }
    });
});



//disable the boxes after there is a winner
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

//create draw after the boxex are full
const gameDraw = () => {
    msg.innerText = `Game is Draw.`;
    message.classList.add("hide"); 
    disableBoxes();
};

//showing the winner
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    message.classList.remove("hide");
    disableBoxes(); // call the function
};
//checking winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        /*
        console.log(pattern[0], pattern[1], pattern[2]);   //getting the indexes of the pattern
        console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);    //checking the element of the boxes and using .innerText to print the content of the box
        */
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("winner", pos1Val);
                showWinner(pos1Val);
                return true;
            }
        }
    }
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
