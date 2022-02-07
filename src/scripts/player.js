
export default class Player {
  constructor() {
    this.hand = [];  // possible object? array okay for two things.
  }

  dealCard(card) {
    this.hand.push(card);
  }

}
