import Card from './card.js';

export default class Deck {
  constructor() {
    this.moveCards = allCards;
    this.currentCards = [];

  }

  // makeCards() {
  //   while (this.cards.length < Card.allCards.length) {

  //   }
  // }

  getCard() {
    debugger
    let cardIdx = Math.floor(Math.random() * this.moveCards.length);
    debugger
    return this.moveCards[cardIdx];
  }
  deal() {
    let card = getCard();
    this.currentCards.push(card);
    return card;
  }

}

const tiger = [[-1, 0], [2, 0]];                        // tiger
const dragon = [[-1, 1], [-1, -1], [1, 2], [1, -2]];    // dragon
const frog = [[1, -1], [0, -2], [-1, 1]];               // frog
const rabbit = [[-1, -1], [1, 1], [0, 2]];              // rabbit
const crab = [[0, -2], [1, 0], [0, 2]];                 // crab 
const elephant = [[0, -1], [1, -1], [0, 1], [1, 1]];    // elephant
const goose = [[0, -1], [1, -1], [0, 1], [-1, 1]];      // goose
const rooster = [[0, -1], [-1, -1], [0, 1], [1, 1]];    // rooster
const monkey = [[1, -1], [-1, -1], [-1, 1], [1, 1]];    // monkey
const mantis = [[1, -1], [1, 1], [-1, 0]];              // mantis
const horse = [[0, -1], [-1, 0], [1, 0]];               // horse 
const ox = [[0, 1], [-1, 0], [1, 0]];                   // ox
const crane = [[1, 0], [-1, -1], [-1, 1]];              // crane
const boar = [[1, 0], [0, -1], [0, 1]];                 // boar
const eel = [[1, -1], [-1, -1], [0, 1]];                // eel
const cobra = [[0, -1], [1, 1], [-1, 1]];               // cobra

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