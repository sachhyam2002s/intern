let count = 0;

function displayCount(){
    document.getElementById("count").textContent = count;
}

function increase(){
    count++;
    displayCount()
}
function decrease(){
    count--;
    displayCount()
}
function reset(){
    count = 0;
    displayCount()
}