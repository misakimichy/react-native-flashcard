import { AsyncStorage } from 'react-native';
import Deck from './../models/Deck';

const DECK_KEY = 'flashcards:decks';
const readDecks = () => read(DECK_KEY, Deck.fromObject);
const writeDecks = decks => write(DECK_KEY, decks);

export const read = async (key, numbs) => {
    try {
        let val = await AsyncStorage.getItem(key);
        if(val !== null) {
            let readValue = JSON.parse(val).map(numb => {
                return numbs(numb);
            })
            readValue;
        } else {
            console.log(`${key} is not found.`);
            return [];
        }
    } catch (error) {
        console.log('AsyncStorage error:', error.message);
    }
};

export const write = async (key, item) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
        console.log('AsyncStorage error:', error.message);
    }
};