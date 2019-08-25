import { guide } from '../utils';

class Card {
  constructor(deckId, question, answer) {
    this.deckId = deckId;
    this.question = question;
    this.answer = answer;
    this.id = guide();
  }

  setFromObject = object => {
    this.deckId = object.deckId;
    this.id = object.id;
    this.question = object.question;
    this.answer = object.answer;
  }

  static fromObject = object => {
    let card = new Card(object.deckId, object.question, object.answer);
    card.setFromObject(object);
    return card;
  }
}

export default Card;