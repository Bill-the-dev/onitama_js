import Board from './board.js';
// import Card from './card.js';
import Player from './player.js';

export default class Deck {
  constructor() {
    this.moveCards = allCards;
    this.currentCards = [];
    this.players = game.players;
  }

  getCards() {
    let cards = [];
    let i = cards.length;
    while (i < 5) {
      let cardIdx = Math.floor(Math.random() * this.moveCards.length);
      if (!cards.includes(this.moveCards[cardIdx])) {
        let card = this.moveCards[cardIdx]
        cards.push(card);
        i++;
      }
      // console.log(cards.length)
      // console.log(cards)
    }
    return cards;
  }

  deal() {
    let cards = this.getCards();
    
    for (let i = 0; i < cards.length; i++) {    
      this.viewDealCard(cards[i]);
      this.viewToggleFlipAll();
      this.currentCards.push(cards[i]);
    }
    return cards;
  }

  // toggle is_flipped on/off
  viewToggleFlipAll() {
    let allCards = document.querySelectorAll(".game-card");
    allCards.forEach(function (card) {
      card.classList.toggle("is_flipped");
    });
  }

  modalToggleFlipAll() {
    let allCards = document.querySelectorAll(".modal-card");
    allCards.forEach( (card, index) => {
      setTimeout(() => {
        card.classList.toggle("is_flipped");
      }, (50 * index));
    });
  }

  // toggle is_flipped for switch turn
  async viewToggleFlipTurn() {
    let that = this;
    
    let turnCard = document.querySelector(".move-card .active-card");
    turnCard.parentElement.classList.toggle("is_flipped");

    let deckCard = document.querySelector("#on-deck-card");
    deckCard.classList.toggle("is_flipped");
  }

  // initial deal
  viewDealCard(card) {
    let name = card[0].toLowerCase();
    for (let i = 0; i < imgSources.length; i++) {
      if (imgSources[i].includes(name)) {
        let whichCard = this.viewDealTo();
        let setBack = document.createElement("img");
        setBack.className = "grid-graphic";
        setBack.src = `${imgSources[i]}`;
        whichCard.appendChild(setBack);
      }
    }
  }

  // turn swap deal
  viewDealSwap(card, cardEl) {
    let that = this;
    // remove old img
    let child = cardEl.firstChild;
    cardEl.removeChild(child);

    // set new img 
    let name = card[0].toLowerCase();
    for (let i = 0; i < imgSources.length; i++) {
      if (imgSources[i].includes(name)) {
        let setBack = document.createElement("img");
        setBack.className = "grid-graphic";
        setBack.src = `${imgSources[i]}`;
        cardEl.appendChild(setBack);
      }
    }
  }

  // flip opp cards, in last viewDealTo 
  viewInvertOppAll() {
    let oppCard4 = document.querySelector("#back4");
    let oppCard5 = document.querySelector("#back5");

    oppCard4.classList.toggle("is_inverted");
    oppCard5.classList.toggle("is_inverted");
  }

  // inital deal rotation 
  viewDealTo() {
    let that = this;
    let cardL = that.currentCards.length;
    if (cardL === 0) {
      return document.getElementById("back1");
      //  blue 0    back1
    } else if (cardL === 1) {
      return document.getElementById("back4");
      //  red 1     back4
    } else if (cardL === 2) {
      return document.getElementById("back2");
      //  blue 2    back2
    } else if (cardL === 3) {
      return document.getElementById("back5");
      //  red 3     back5
    } else if (cardL === 4) {
      // this.viewInvertOppAll()
      return document.getElementById("back3");
      //  on-deck   back3
    }
  }

  // not needed? using ViewDealSwap
  viewSwapTo(cardEl) {
    let that = this;
    let cardStr = cardEl.id.slice(4);
    let cardNum = parseInt(cardStr);
    if (cardNum === 0) {
      return document.getElementById("back1");
      //  blue 0    back1
    } else if (cardNum === 1) {
      return document.getElementById("back4");
      //  red 1     back4
    } else if (cardNum === 2) {
      return document.getElementById("back2");
      //  blue 2    back2
    } else if (cardNum === 3) {
      return document.getElementById("back5");
      //  red 3     back5
    } else if (cardNum === 4) {
      // this.viewInvertOppAll()
      return document.getElementById("back3");
      //  on-deck   back3
    }
  }


  // modal deal
  modalDealCards() {
    // if () {
      for (let i = 0; i < allCards.length; i++) {
        let card = allCards[i];
        let name = card[0].toLowerCase();
        let nameShow = name[0].toUpperCase() + name.substring(1)
        let imgSource = imgSourcesObj[name]
        let whichCard = document.getElementById(`modal-back-${i+1}`);
  
        // h2 name
        let setBackName = document.createElement("h2");
        setBackName.className = "back-name";
        setBackName.innerHTML = nameShow;
        whichCard.appendChild(setBackName);
        
        // img and src
        let setBackImg = document.createElement("img");
        setBackImg.className = "grid-graphic";
        setBackImg.src = imgSource;
        whichCard.appendChild(setBackImg);
          
      }
    // }

  }
} 






// opponent, iterate (map) over (slice(1)) array => ele * -1
const tiger = ["Tiger", [-1, 0], [2, 0]];                        // tiger
const dragon = ["Dragon", [-1, 1], [-1, -1], [1, 2], [1, -2]];    // dragon
const frog = ["Frog", [1, -1], [0, -2], [-1, 1]];               // frog
const rabbit = ["Rabbit", [-1, -1], [1, 1], [0, 2]];              // rabbit
const crab = ["Crab", [0, -2], [1, 0], [0, 2]];                 // crab 
const elephant = ["Elephant", [0, -1], [1, -1], [0, 1], [1, 1]];    // elephant
const goose = ["Goose", [0, -1], [1, -1], [0, 1], [-1, 1]];      // goose
const rooster = ["Rooster", [0, -1], [-1, -1], [0, 1], [1, 1]];    // rooster
const monkey = ["Monkey", [1, -1], [-1, -1], [-1, 1], [1, 1]];    // monkey
const mantis = ["Mantis", [1, -1], [1, 1], [-1, 0]];              // mantis PROBLEM?
const horse = ["Horse", [0, -1], [-1, 0], [1, 0]];               // horse 
const ox = ["Ox", [0, 1], [-1, 0], [1, 0]];                   // ox
const crane = ["Crane", [1, 0], [-1, -1], [-1, 1]];              // crane
const boar = ["Boar", [1, 0], [0, -1], [0, 1]];                 // boar
const eel = ["Eel", [1, -1], [-1, -1], [0, 1]];                // eel
const cobra = ["Cobra", [0, -1], [1, 1], [-1, 1]];               // cobra

const allCards = [tiger, dragon, frog, rabbit, crab, elephant, goose, rooster, monkey, mantis, horse, ox, crane, boar, eel, cobra];

const imgSourcesObj = {
  boar: "assets/onitama_grids/tpng/tgrid_boar.png",
  cobra: "assets/onitama_grids/tpng/tgrid_cobra.png",
  crab: "assets/onitama_grids/tpng/tgrid_crab.png",
  crane: "assets/onitama_grids/tpng/tgrid_crane.png",
  dragon: "assets/onitama_grids/tpng/tgrid_dragon.png",
  eel: "assets/onitama_grids/tpng/tgrid_eel.png",
  elephant: "assets/onitama_grids/tpng/tgrid_elephant.png",
  frog: "assets/onitama_grids/tpng/tgrid_frog.png",
  goose: "assets/onitama_grids/tpng/tgrid_goose.png",
  horse: "assets/onitama_grids/tpng/tgrid_horse.png",
  mantis: "assets/onitama_grids/tpng/tgrid_mantis.png",
  monkey: "assets/onitama_grids/tpng/tgrid_monkey.png",
  ox: "assets/onitama_grids/tpng/tgrid_ox.png",
  rabbit: "assets/onitama_grids/tpng/tgrid_rabbit.png",
  rooster: "assets/onitama_grids/tpng/tgrid_rooster.png",
  tiger: "assets/onitama_grids/tpng/tgrid_tiger.png"
};

const imgSources = [
  "assets/onitama_grids/tpng/tgrid_boar.png",
  "assets/onitama_grids/tpng/tgrid_cobra.png",
  "assets/onitama_grids/tpng/tgrid_crab.png",
  "assets/onitama_grids/tpng/tgrid_crane.png",
  "assets/onitama_grids/tpng/tgrid_dragon.png",
  "assets/onitama_grids/tpng/tgrid_eel.png",
  "assets/onitama_grids/tpng/tgrid_elephant.png",
  "assets/onitama_grids/tpng/tgrid_frog.png",
  "assets/onitama_grids/tpng/tgrid_goose.png",
  "assets/onitama_grids/tpng/tgrid_horse.png",
  "assets/onitama_grids/tpng/tgrid_mantis.png",
  "assets/onitama_grids/tpng/tgrid_monkey.png",
  "assets/onitama_grids/tpng/tgrid_ox.png",
  "assets/onitama_grids/tpng/tgrid_rabbit.png",
  "assets/onitama_grids/tpng/tgrid_rooster.png",
  "assets/onitama_grids/tpng/tgrid_tiger.png"
];



const pngBoar = "assets/onitama_grids/tpng/tgrid_boar.png";
const pngCobra = "assets/onitama_grids/tpng/tgrid_cobra.png";
const pngCrab = "assets/onitama_grids/tpng/tgrid_crab.png";
const pngCrane = "assets/onitama_grids/tpng/tgrid_crane.png";
const pngDragon = "assets/onitama_grids/tpng/tgrid_dragon.png";
const pngEel = "assets/onitama_grids/tpng/tgrid_eel.png";
const pngElephant = "assets/onitama_grids/tpng/tgrid_elephant.png";
const pngFrog = "assets/onitama_grids/tpng/tgrid_frog.png";
const pngGoose = "assets/onitama_grids/tpng/tgrid_goose.png";
const pngHorse = "assets/onitama_grids/tpng/tgrid_horse.png";
const pngMantis = "assets/onitama_grids/tpng/tgrid_mantis.png";
const pngMonkey = "assets/onitama_grids/tpng/tgrid_monkey.png";
const pngOx = "assets/onitama_grids/tpng/tgrid_ox.png";
const pngRabbit = "assets/onitama_grids/tpng/tgrid_rabbit.png";
const pngRooster = "assets/onitama_grids/tpng/tgrid_rooster.png";
const pngTiger = "assets/onitama_grids/tpng/tgrid_tiger.png";

