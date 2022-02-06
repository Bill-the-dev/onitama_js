import "./styles/index.css"
import "./styles/cards.css"
import Board from "./scripts/board";

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) callback(e)
  })
}


// new
const board = new Board('#board');












// // Get this:
// addGlobalEventListener("click", "div", e => {
//   console.log("hi")
// })
// // From this:
// document.addEventListener("click", e => {
//   if (e.target.matches("div")) {
//     console.log("you clicked a div");
//   }
// })


// document.addEventListener("DOMContentLoaded", () => {
  


// });

// const card = document.querySelector('.move-card');

// card.addEventListener('click', function () {
//   card.classList.toggle('is-flipped');
// });



// document.addEventListener("DOMContentLoaded", () => {
//   debugger;
//   const game = new Game();
//   const rootEl = document.querySelector(".ttt");
//   new View(game, rootEl);
// });