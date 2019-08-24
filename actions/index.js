export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const LOAD_DATA = "LOAD_DATA";

import Card from '../models/Card';
import Deck from '../models/Deck';

export const addDeck = name => ({
    type: ADD_DECK,
    data: new Deck(name)
});

export const addCard = deckId => ({
    type: ADD_CARD,
    data: new Card(deckId)
});

export const loadData = data => ({
    type: LOAD_DATA,
    data
});