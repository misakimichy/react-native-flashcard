import { guide } from '../utils'

class Card {
  constructor(deckID) {
    this.deckID = deckID
    this.id = guide()
  }

  setFromObject = object => {
    this.deckID = object.deckID
    this.id = object.id
  }

  static fromObject = object => {
    let card = new Card(object.deckID)
    card.setFromObject(object)
    return card
  }
}

export default Card