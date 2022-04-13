import "./index.scss"
import Game from "./scripts/game.js";
import Board from "./scripts/board";
import { modalFill } from "./scripts/modal";
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

  // move pawn to square 
  addGlobalEventListener("click", ".square.active", e => {
    let posEndEle = e.target;
    game.viewMovePiece(posEndEle);
  });

  // Modal consts
  let modalHowTo = document.querySelector(".modal__howTo");
  let modalView = document.querySelector(".modal__fill");
  document.querySelector(".modal__fill").innerHTML = modalFill;

  // Modal How To on
  addGlobalEventListener("click", "#how-to-play", e => {
    e.preventDefault();
    console.log("on");
    modalHowTo.classList.add("modal__fill-active");
  });

  // Modal How To off
  modalHowTo.addEventListener("click", e => {
    e.preventDefault();
    console.log("off");
    modalHowTo.classList.remove("modal__fill-active");
  });

  // Start / End game dynamic
  addGlobalEventListener("click", "#start", e => {
    let body = document.querySelector(".body");
    let startEle = document.querySelector(".start-inactive");
    let turnRedCircle = document.querySelector(".turn-red-circle");
    let turnBlueCircle = document.querySelector(".turn-blue-circle") 
    
    if (game.activeGame === false) {
      console.log("You clicked start");
      game.start();
      
      startEle.classList.remove("start-inactive");
      startEle.classList.add("start-active");
      body.classList.remove("turn-null");
      body.classList.add("turn-blue");
      startEle.innerText = "End Game";
      turnRedCircle.style.visibility = 'hidden';
      turnBlueCircle.style.visibility = 'visible';
    } else {
      console.log("You clicked end game");
      body.classList.add("turn-null");
      
      setTimeout(() => {
        body.classList.remove("turn-blue");
        body.classList.remove("turn-red");
        history.go(0);
      }, 501);
    }

  });

  addGlobalEventListener("click", "#btn-restart", e => {
    let body = document.querySelector(".body");
    body.classList.add("turn-null");

    setTimeout(() => {
      console.log('restart')
      body.classList.remove("turn-blue");
      body.classList.remove("turn-red");
      history.go(0);
    }, 500);
  })


});

// addGlobalEventListener("click", ".start-active", e => {
  // });


  // bindEvents() {
  //   document.querySelectorAll("ul li").forEach((li) => {
  //     li.addEventListener("click", this.handleClick);
  //   });
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
