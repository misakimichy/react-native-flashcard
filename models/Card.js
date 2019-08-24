import { guide } from '../utils'

class Card {
  constructor(deckID) {
    this.deckID = deckID;
    this.questions = questions;
    this.title = title;
    this.id = guide();
  }

  setFromObject = object => {
    this.deckId = object.deckId;
    this.id = object.id;
    this.questions = object.questions;
    this.title = object.title;
  }

  static fromObject = object => {
    let card = new Card(object.deckID);
    card.setFromObject(object);
    return card;
  }
}

export default Card;