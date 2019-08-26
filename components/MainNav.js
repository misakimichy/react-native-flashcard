import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Deck from './Deck';
import Quiz from './Quiz';
import AddDeck from './AddDeck';
import AddCard from './AddCard';
import Tab from './Tab';

const MainNav = StackNavigator({
    Home: {
        screen: Tab
    },
    Deck: {
        screen: Deck
    },
    Quiz: {
        screen: Quiz
    },
    AddDeck: {
        screen: AddDeck
    },
    NewCard: {
        screen: AddCard,
        path: 'createCard/:deckId'
    }
})

export default MainNav;