import Board from './board.js';
import Card from './card.js';

export default class Deck {
  constructor() {
    this.moveCards = allCards;
    this.currentCards = [];
  }

  getCard() {
    let cardIdx = Math.floor(Math.random() * this.moveCards.length);
    return this.moveCards[cardIdx];
  }
  deal() {
    let card = this.getCard();
    if (!this.currentCards.includes(card)) {
      this.currentCards.push(card);
    } else {
      this.deal();
    }
    return card;
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