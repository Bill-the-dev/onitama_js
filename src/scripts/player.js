
export default class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.hand = [];  // possible object? array okay for two things.
  }

  dealCard(card) {
    this.hand.push(card);
  }

  

}
