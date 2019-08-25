import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { styles } from '../styles/index';

class Quiz extends Component {
    static navigationOptions = {
        title: 'Quiz'
    }

    state = {
        currentAnswers: 0,
        showQuestion: true,
        showResults: false,
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.deck}>
                        <Text style={styles.title}>Accuracy: {this.percentage()}</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Quiz', { card })}
                    >
                        <Text style={styles.buttonText}>Restart Quiz!</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Deck', { card })}
                    >
                        <Text style={styles.buttonText}>Back to the Deck</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        card: props.navigation.state.params.cards,
        questions: props.navigation.state.params.card.questions
    }
}

export default connect(mapStateToProps)(Quiz);