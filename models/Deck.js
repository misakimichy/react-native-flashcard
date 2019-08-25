import { guide } from '../utils';

class Deck {
  constructor(name) {
    this.name = name;
    this.id = guide();
    this.cards = [];
  }

  setFromObject = object => {
    this.name = object.name;
    this.cards = object.cards;
    this.id = object.id;
  }

  static fromObject = object => {
    let deck = new Deck(object.name);
    deck.setFromObject(object);
    return deck;
  }

  addCard = card => {
    this.cards = this.cards.concat(card);
  }
}

export default Deck;