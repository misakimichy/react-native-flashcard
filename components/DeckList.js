import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text,  TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../style/styles';

class DeckList extends Component {
    render() {
        const { id, title, count, navigation } = this.props;

        return (
            < TouchableOpacity
                style={styles.item} 
                onPress={() => navigation.navigate('Deck', {deckId: id, deckName: title})}
            >
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.count}>{count} {count === 1 ? `card` : `cards`}</Text>
            </ TouchableOpacity>
        )
    }
}

function mapStateToProps(decks, props) {
    const { id } = props;
    return {
        id,
        title: decks[id].title,
        count: decks[id].questions.length
    }
}

export default withNavigation(connect(mapStateToProps)(DeckList));