import "./styles/index.css";
import "./styles/cards.css";
import "./styles/pieces.css";
import "./styles/menu.css";
import Game from "./scripts/game.js";
import Board from "./scripts/board";

document.addEventListener("DOMContentLoaded", () => {

  let gamePaused = false;



  window.Game = Game;

  // bindEvents() {
  //   document.querySelectorAll("ul li").forEach((li) => {
  //     li.addEventListener("click", this.handleClick);
  //   });
  // }

  function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
      if (e.target.matches(selector)) callback(e);
    });
  }

  // let pawn = document.querySelectorAll("#pawn")

  addGlobalEventListener("click", "#pawn", e => {
    console.log("You clicked a pawn");
    let allPawns = document.querySelectorAll("#pawn");
    allPawns.forEach(function (pawn) {
      if (pawn.classList.contains("active-pawn")) {
        pawn.classList.remove("active-pawn");
        pawn.classList.add("inactive-pawn");
      }
    });
    e.target.classList.remove("inactive-pawn");
    e.target.classList.add("active-pawn");


  });





});



//   gameOver() {}

//   swapMoveCards() {}

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