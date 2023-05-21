let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// get fetch for all the toys

  fetch('http://localhost:3000/toys')
  .then(res => res.json())
      // i did a console log, .then(data => console.log(data))
  .then(toys => toys.forEach(toy => renderOneToy(toy))) //renderOneToy() is not defined yet

// get Data from server and render toys to the DOM
//getAllToys()


// // DOM Manipulators, DOM Render Functions
 function renderOneToy(toy){
  //console.log(toy)
//  // building toy card 
 let container = document.getElementById("toy-collection")
let card = document.createElement("div")
card.classList.add("card")
//console.log(card)
let h2 = document.createElement("h2")
let img = document.createElement("img")
let p = document.createElement("p")
let button = document.createElement("button")
img.classList.add("toy-avatar")
button.classList.add("like-btn")
button.id = toy.id
button.textContent = "Like"
h2.innerText = toy.name
img.src = toy.image
p.innerText = `${toy.likes} Likes`
card.append(h2, img, p, button)
container.append(card)
// console.log(card)
 }

// Use fetch() to make a "POST" request to create a new toy, then add it to the DOM
fetch("http://localhost:3000/toys",{
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({
    "name": "toys.name",
    "image": "toys.image",
    "likes": "toys.likes"

  }),
  

  // fetch("http://localhost:3000/toys",)
  // .then(function (response) {
  //   return response.json();
  // })
  // .then(function (object) {
  //   console.log(object);
  // });



