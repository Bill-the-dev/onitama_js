import "./styles/index.css";
import "./styles/cards.css";
import "./styles/pieces.css";
import "./styles/menu.css";
import Game from "./scripts/game.js";
import Board from "./scripts/board";

document.addEventListener("DOMContentLoaded", () => {

  let game = new Game();
  let board = new Board();

  // let deck = Deck;
  // let piece = Piece;

  window.Game = Game;
  window.Board = Board;

  function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
      if (e.target.matches(selector)) callback(e);
    });
  }


  // TO-DO const list:
  // allPawns, allCards
  // activePawn, activeCard


  // pawn - select and highlight
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
    if (game.checkHighlight()) {
      console.log("Check highlight pass");
    } else {
      console.log("Check highlight fail");
    }
  });

  // card - select and highlight 
  addGlobalEventListener("click", ".back", e => {
    console.log("You clicked a card");
    let allCards = document.querySelectorAll(".back");
    allCards.forEach(function (card) {
      card.classList.remove("active-card");
      card.classList.add("inactive-card");
    });
    e.target.classList.remove("inactive-card");
    e.target.classList.add("active-card");
    if (game.checkHighlight()) {
      console.log("Check highlight pass");
    } else {
      console.log("Check highlight fail");
    }

  });

  addGlobalEventListener("click", ".square.active", e => {
    console.log("thats a good choice");
  })

  // function checkHighlight() {
  //   let allCards = document.querySelectorAll(".back");
  //   let allPawns = document.querySelectorAll("#pawn");
  //   allPawns.forEach(function (pawn) {
  //     if (pawn.classList.contains("active-pawn")) {
  //       this.activePawn = pawn;
  //     }
  //   });

  //   allCards.forEach(function (card) {
  //     if (card.classList.contains("active-card")) {
  //       console.log("Found an active card!");
  //       this.activeCard = card;
  //     }
  //   });

  //   if (this.activePawn && this.activeCard) {
  //     return [this.activePawn, this.activeCard];
  //   } else {
  //     return false;
  //   }
  // }

  // let boundCheckHighlight = checkHighlight.bind(this);



  // Start / End game dynamic
  addGlobalEventListener("click", "#start", e => {
    if (game.activeGame === false) {
      console.log("You clicked start");
      game.start();
      let startEle = document.querySelector(".start-inactive");
      startEle.classList.remove("start-inactive");
      startEle.classList.add("start-active");
      startEle.innerText = "End Game";
    } else {
      console.log("You clicked end game");
      history.go(0);

      // resets activeGame, below not needed
      // let startEle = document.querySelector("#start");
      // startEle.classList.remove("start-active");
      // startEle.classList.add("start-inactive");
      // startEle.innerText = "Start Game";
    }

  });

  // addGlobalEventListener("click", ".start-active", e => {
  // });


  // bindEvents() {
  //   document.querySelectorAll("ul li").forEach((li) => {
  //     li.addEventListener("click", this.handleClick);
  //   });
  // }




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