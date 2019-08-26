import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import reducer from './reducers';
import { setLocalNotification } from './utils/helpers';
import AddDeck from './components/AddDeck';
import AddCard from './components/AddCard';
import DeckLists from './components/DeckLists';
import Deck from './components/Deck';
import Question from './components/Question';


const store = createStore(reducer);

StatusBar = ({ backgroundColor, ...props}) => {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
  )
}

// Add Tabs
const Tabs = createBottomTabNavigator({
  DeckLists: {
      screen: DeckLists,
      navigationOptions: {
          tabBarLabel: 'DECKS'
      }
  },
  AddDeck: {
      screen: AddDeck,
      navigationOptions: {
          tabBarLabel: 'ADD DECK'
      }
  }
}, {
  tabBarOptions: {
      activeTintColor: black,
      labelStyle: {
          fontSize: 20,
          paddingBottom: 10,
      }
  }
});

// Main view
const Stack = createStackNavigator({
  Home: {
      screen: Tabs,
      navigationOptions: {
          header: null
      }
  },
  AddDeck: {
      screen: AddDeck
  },
  AddCard: {
      screen: AddCard
  },
  Deck: {
      screen: Deck
  },
  Question: {
      screen: Question
  }
}, {
  navigationOptions: {
      headerTintColor: black,
      headerTitleStyle: {
          fontSize: 22,
      }
  },
  cardStyle: {
      backgroundColor: white
  }
});

class App extends Component {
  componentDidMount(){
      setLocalNotification()
  }
  render() {
      return (
          <Provider store={createStore(reducer)}>
              <View style={{ flex: 1 }}>
                  <StatusBar backgroundColor={black} barStyle="light-content" />
                  <Stack />
              </View>
          </Provider>
      )
  }
}

export default App;