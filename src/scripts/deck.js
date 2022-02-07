import Card from './card.js';

export default class Deck {
  constructor() {
    this.moveCards = Card.allCards;
    this.currentCards = [];
    for (let i = 0; i < 16; i++) {
      this.cards.push(new Card());
    }
  }

  makeCards() {
    while (this.cards.length < Card.allCards.length) {

    }
  }

  getCard() {
    let cardIdx = Math.floor(Math.random * this.cards.length);
    return this.cards[cardIdx];
  }
  deal() {
    let card = getCard();
    this.currentCards.push(card);
    return card;
  }



}
  // shuffle and card.pop() ?
  // Game obj should be in charge of getting the card and giving it to the player 





// should deal() a random card and remove from deck
// dealtCards should include the card