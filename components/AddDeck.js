import React, { Component } from 'react';
import { Text, TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet } from 'react-native';
import { addDeck } from '../actions';
import { saveDeck } from '../utils/api';
import { generateUID } from '../utils/helpers';
import { styles } from '../style/styles';

SubmitDeckBtn = ({ onPress }) => {
    return (
        <TouchableOpacity
         style={styles.submitBtn}
         onPress={onPress}>
            <Text style={styles.submitBtnText}>Create Deck</Text>
        </TouchableOpacity>
    )
}

class AddDeck extends Component{
    state = {
        nameOfDeck: ''
    }

    // Dispatch addDeck in this function
    submit = () => {
        const { nameOfDeck } = this.state;
        if(nameOfDeck === '') {
            alert('Name a deck!')
            return;
        }
        const deckId = generateUID();
        const title = nameOfDeck;
        const newDeck = {
            title: nameOfDeck.trim(),
            questions: []
        }
        this.props.dispatch(addDeck(deckId, newDeck));
        this.setState({nameOfDeck: ''});
        this.toDeck(deckId, title);
        saveDeck(deckId, newDeck);
    }

    toDeck = (id, title) => {
        this.props.navigation.navigate('Deck', {deckId: id, deckName: title});
    }

    render(){
        const { nameOfDeck } = this.state;

        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.question}>Name the new Deck:</Text>
                <TextInput
                    value={nameOfDeck}
                    style={styles.input}
                    onChangeText={ nameOfDeck => this.setState({nameOfDeck})}
                />
                <SubmitDeckBtn onPress={this.submit} />
            </KeyboardAvoidingView>
        )
    }
}

export default AddDeck;