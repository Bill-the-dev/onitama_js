import "./styles/index.css"
import "./styles/cards.css"
import "./styles/pieces.css"
import Game from "./scripts/game.js";
import Board from "./scripts/board";

document.addEventListener("DOMContentLoaded", () => {
  



window.Game = Game;

// bindEvents() {
//   document.querySelectorAll("ul li").forEach((li) => {
//     li.addEventListener("click", this.handleClick);
//   });
// }

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) callback(e)
  })
}


});

// function createGrid() {
//   const gameBoard = document.getElementById("board");

//   for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//       let square = document.createElement("div");
//       square.classList.add("square");
//       square.setAttribute("id", [i, j]);
//       gameBoard.appendChild(square);
//     }   
//   }
// }

// createGrid();

//   gameOver() {

//   }

//   swapMoveCards() {

//   }

//   swapTurn() {
//     if (this.currentPlayer === 2) {
//       this.currentPlayer === 1;
//     } else {
//       this.currentPlayer === 2;
//     }
//   }
// }









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