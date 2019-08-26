import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Constants from 'expo-constants';
import reducer from './reducers';
import { setLocalNotification } from './utils/helpers';
import { black, white } from './utils/colors';
import AddDeck from './components/AddDeck';
import AddCard from './components/AddCard';
import DeckLists from './components/DeckLists';
import Deck from './components/Deck';
import Question from './components/Question';


const store = createStore(reducer);

const AppStatusBar = ({ backgroundColor, ...props}) => {
  return (
    <View style={{height: Constants.statusBarHeight}}>
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
const MainNav = createStackNavigator({
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

const AppNav = createAppContainer(MainNav);

class App extends Component {
  componentDidMount(){
      setLocalNotification();
  }
  render() {
      return (
          <Provider store={createStore(reducer)}>
              <View style={{ flex: 1 }}>
                  <AppStatusBar backgroundColor={black} barStyle="light-content" />
                  <AppNav />
              </View>
          </Provider>
      )
  }
}

export default App;