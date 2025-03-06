//fetch api
const url = "https://dragonball-api.com/api/characters/1";
const description = document.querySelector(".description");
const btn = document.querySelector("#btn");

//using async-await
const getCharacters = async() => {
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
    description.innerText = data.description;
}

//using promise chain
// function getCharacters(){
//     fetch(url).then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         description.innerText = data.gender;
//     })
// }
btn.addEventListener("click", getCharacters) 