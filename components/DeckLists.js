import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import { AppLoading } from 'expo';
import { receiveDecks } from '../actions';
import { getDecks } from '../utils/api';
import { styles } from '../style/styles';
import DeckList from './DeckList';

class DeckLists extends Component{
    state = {
        loading: true
    }        

    componentDidMount() {
        const { dispatch } = this.props;
        getDecks()
            .then(decks => dispatch(receiveDecks(decks)))
            .then(() => this.setState(() => ({ loading: false })))
    }

    render(){
        const { loading } = this.state;
        const { decks } = this.props;

        if(loading === true)
            return <AppLoading />

        return(
            <View style={styles.list}>
                {/* FlatList: https://facebook.github.io/react-native/docs/flatlist.html */}
                {/* How to use FlatList: https://medium.com/react-native-development/how-to-use-the-flatlist-component-react-native-basics-92c482816fe6*/}
                <FlatList
                    data={Object.keys(decks).map(id => { return { key: id }})}
                    renderItem={({item}) => (
                    <DeckList key={item.key} id={item.key}/>
                 )}
                />
            </View>
        )
    }
}

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckLists)