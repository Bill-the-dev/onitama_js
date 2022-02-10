import Board from './board.js';
import Card from './card.js';
import Player from './player.js';

export default class Deck {
  constructor() {
    this.moveCards = allCards;
    this.currentCards = [];
    this.players = game.players;
  }

  getCard() {
    let cardIdx = Math.floor(Math.random() * this.moveCards.length);
    return this.moveCards[cardIdx];
  }
  deal() {
    let card = this.getCard();
    if (!this.currentCards.includes(card)) {
      // debugger
      this.viewDealCard(card);
      this.viewToggleFlipAll();
      this.currentCards.push(card);

    } else {
      this.deal();
    }
    return card;
  }

  // toggle is_flipped on/off
  viewToggleFlipAll() {
    let allCards = document.querySelectorAll(".move-card");
    allCards.forEach(function (card) {
      card.classList.toggle("is_flipped")
    }) 
  }

  // toggle is_flipped for switch turn
  viewToggleFlipTurn() {
    let turnCard = document.querySelector(".move-card .active-card");
    turnCard.parentElement.toggle("is_flipped")

    let deckCard = document.querySelector("#on-deck-card");
    setTimeout(() => {
      deckCard.toggle("is_flipped");
    }, 1000);  
    // 1sec timeout
  }


  viewDealCard(card) {
    let name = card[0].toLowerCase();
    for (let i = 0; i < imgSources.length; i++) {
      if (imgSources[i].includes(name)){
        let whichCard = this.viewDealTo();
        let setBack = document.createElement("img");
        setBack.className = "grid-graphic";
        setBack.src = `${imgSources[i]}`;
        whichCard.appendChild(setBack);
      }
    }
  }
  // NOT WORKING
  // flip opp cards, in last viewDealTo 
  viewInvertOppAll() {
    let oppCard4 = document.querySelector("#back4");
    let oppCard5 = document.querySelector("#back5");

    oppCard4.classList.toggle("is_inverted");
    oppCard5.classList.toggle("is_inverted");
  }

  viewDealTo() {
    let cardL = this.currentCards.length;
    if (cardL === 0) {
      return document.getElementById("back1")
      //  blue 0    back1
    } else if (cardL === 1) {
      return document.getElementById("back4")
      //  red 1     back4
    } else if (cardL === 2) {
      return document.getElementById("back2")
      //  blue 2    back2
    } else if (cardL === 3) {
      return document.getElementById("back5")
      //  red 3     back5
    } else if (cardL === 4) {
      // this.viewInvertOppAll()
      return document.getElementById("back3")
      //  on-deck   back3
    }
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
const mantis = ["Mantis", [1, -1], [1, 1], [-1, 0]];              // mantis
const horse = ["Horse", [0, -1], [-1, 0], [1, 0]];               // horse 
const ox = ["Ox", [0, 1], [-1, 0], [1, 0]];                   // ox
const crane = ["Crane", [1, 0], [-1, -1], [-1, 1]];              // crane
const boar = ["Boar", [1, 0], [0, -1], [0, 1]];                 // boar
const eel = ["Eel", [1, -1], [-1, -1], [0, 1]];                // eel
const cobra = ["Cobra", [0, -1], [1, 1], [-1, 1]];               // cobra

const allCards = [tiger, dragon, frog, rabbit, crab, elephant, goose, rooster, monkey, mantis, horse, ox, crane, boar, eel, cobra]

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
]




const pngBoar = "assets/onitama_grids/tpng/tgrid_boar.png"
const pngCobra = "assets/onitama_grids/tpng/tgrid_cobra.png"
const pngCrab = "assets/onitama_grids/tpng/tgrid_crab.png"
const pngCrane = "assets/onitama_grids/tpng/tgrid_crane.png"
const pngDragon = "assets/onitama_grids/tpng/tgrid_dragon.png"
const pngEel = "assets/onitama_grids/tpng/tgrid_eel.png"
const pngElephant = "assets/onitama_grids/tpng/tgrid_elephant.png"
const pngFrog = "assets/onitama_grids/tpng/tgrid_frog.png"
const pngGoose = "assets/onitama_grids/tpng/tgrid_goose.png"
const pngHorse = "assets/onitama_grids/tpng/tgrid_horse.png"
const pngMantis = "assets/onitama_grids/tpng/tgrid_mantis.png"
const pngMonkey = "assets/onitama_grids/tpng/tgrid_monkey.png"
const pngOx = "assets/onitama_grids/tpng/tgrid_ox.png"
const pngRabbit = "assets/onitama_grids/tpng/tgrid_rabbit.png"
const pngRooster = "assets/onitama_grids/tpng/tgrid_rooster.png"
const pngTiger = "assets/onitama_grids/tpng/tgrid_tiger.png"






// const allCards = {
//   [tiger, [-1, 0], [2, 0]],
//   [dragon, [-1, 1], [-1, -1], [1, 2], [1, -2]],
//   [frog, [1, -1], [0, -2], [-1, 1]],
//   [rabbit, [-1, -1], [1, 1], [0, 2]],
//   [crab, [0, -2], [1, 0], [0, 2]],
//   [elephant, [0, -1], [1, -1], [0, 1], [1, 1]],
//   [goose, [0, -1], [1, -1], [0, 1], [-1, 1]],
//   [rooster, [0, -1], [-1, -1], [0, 1], [1, 1]],
//   [monkey, [1, -1], [-1, -1], [-1, 1], [1, 1]],
//   [mantis, [1, -1], [1, 1], [-1, 0]],
//   [horse, [0, -1], [-1, 0], [1, 0]],
//   [ox, [0, 1], [-1, 0], [1, 0]],
//   [crane, [1, 0], [-1, -1], [-1, 1]],
//   [boar, [1, 0], [0, -1], [0, 1]],
//   [eel, [1, -1], [-1, -1], [0, 1]],
//   [cobra, [0, -1], [1, 1], [-1, 1]]
// };  

// const allCards = {
//   tiger : [[-1, 0], [2, 0]],                       
//   dragon : [[-1, 1], [-1, -1], [1, 2], [1, -2]],    
//   frog : [[1, -1], [0, -2], [-1, 1]],               
//   rabbit : [[-1, -1], [1, 1], [0, 2]],              
//   crab : [[0, -2], [1, 0], [0, 2]],                  
//   elephant : [[0, -1], [1, -1], [0, 1], [1, 1]],    
//   goose : [[0, -1], [1, -1], [0, 1], [-1, 1]],      
//   rooster : [[0, -1], [-1, -1], [0, 1], [1, 1]],    
//   monkey : [[1, -1], [-1, -1], [-1, 1], [1, 1]],    
//   mantis : [[1, -1], [1, 1], [-1, 0]],              
//   horse : [[0, -1], [-1, 0], [1, 0]],                
//   ox : [[0, 1], [-1, 0], [1, 0]],                   
//   crane : [[1, 0], [-1, -1], [-1, 1]],              
//   boar : [[1, 0], [0, -1], [0, 1]],                 
//   eel : [[1, -1], [-1, -1], [0, 1]],                
//   cobra : [[0, -1], [1, 1], [-1, 1]] 
// };        

// const allCards = [tiger, dragon, frog, rabbit, crab, elephant, goose, rooster, monkey, mantis, horse, ox, crane, boar, eel, cobra]
  // shuffle and card.pop() ?
  // Game obj should be in charge of getting the card and giving it to the player 





// should deal() a random card and remove from deck
// dealtCards should include the card