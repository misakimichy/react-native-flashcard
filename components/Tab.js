import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import AddDeck from './AddDeck';
import DeckList from './DeckList';

const Tab = TabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={35} color={tintColor} />
        }
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({ tintColor }) => <Ionicons name="plus-aquare" size={35} color={tintColor} />
        }
    }
});

export default Tab;