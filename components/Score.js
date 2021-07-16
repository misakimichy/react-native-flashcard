import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { styles } from '../style/styles';
import { black, white } from '../utils/colors';

const Score = props => {
    const { correct, incorrect, restart, deck, deckId, navigation } = props;

    return(
        <View style={styles.center}>
            <Text style={styles.score}>Correct: {correct}</Text>
            <Text style={styles.score}>Incorrect: {incorrect}</Text>
            <Text style={styles.score}>{Math.round((correct/deck.questions.length)*100)}%</Text>

            <TouchableOpacity
                style={[styles.btn, {backgroundColor: black, marginTop: 25}]}
                onPress={restart}
            >
                <Text style={[styles.btnText, {color: white}]}>Restart!</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.btn, {backgroundColor: white, marginTop: 25}]}
                onPress={() => navigation.navigate('DeckLists', {deckId: deckId, deckName: deck.title})}
            >
                <Text style={styles.btnText}>Back to Deck</Text>
            </TouchableOpacity>
        </View>
    )
}

export default withNavigation(Score);