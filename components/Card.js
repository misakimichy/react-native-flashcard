import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TextButton from './TextButton';
import { styles } from '../style/styles';
import { red } from '../utils/colors';

 const Card = props => {
    const { index, deck, showAnswer, flip, answer } = props;
    const card = deck.questions[index];

    return(
        <View style={styles.center}>
            <Text style={styles.cardText}>{showAnswer ? card.answer : card.question}</Text>
            <TextButton
                onPress={flip}
                style={{marginTop: 20, marginBottom: 50, fontSize: 18, fontWeight:'bold'}}
            >
                {showAnswer ? 'Show Question' : 'Show Answer'}
            </TextButton>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => answer('correct')}
            >
                <Text style={styles.btnText}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.btn, {backgroundColor: red}]}
                onPress={() => answer('incorrect')}
            >
                <Text style={styles.btnText}>Incorrect</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Card;