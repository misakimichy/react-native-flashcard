import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { styles } from '../styles/index';
import {  clearLocalNotification, setLocalNotification } from '../utils/notifications';

class Quiz extends Component {
    static navigationOptions = {
        title: 'Quiz'
    }

    state = {
        currentAnswers: 0,
        showQuestion: true,
        showResults: false,
        current: 0,
    }

    percentage() {
        let value = (this.state.correctAnswers / this.props.questions.length) * 100;
        return (
            parseFloat(value) + '%'
        );
    }

    toggleView() {
        this.setState(previousState => ({
            showQuestion: !previousState.showQuestion
        }));
    }

    submitAnswer(status) {
        if (status === 'correct') {
            this.setState(previousState => ({
                correctAnswers: previousState.correctAnswers + 1
            }))
        }
        clearLocalNotification()
            .then(setLocalNotification());
        // Todo: call changeQuestion function
        this.changeQuestion();
    }

    changeQuestion() {
        if(this.state.current === this.props.questions.length -1) {
            this.setState(previousState => ({
                showResults: true
            }))
        } else {
            this.state.current(previousState => ({
                current: previousState.current + 1
            }))
        }
    }

    render() {
        const { card, questions } = this.props;
        const { question, answer } = questions[this.state.current];
        return this.state.showResults
            ? (
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
                            <Text style={styles.buttonText}>Restart!</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Deck', { card })}
                        >
                            <Text style={styles.buttonText}>Back to Deck</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
            : (
                <View style={styles.container}>
                    <View>
                        <Text>{`Card ${this.state.current + 1} of ${questions.length}`}</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.deck}>
                            <Text style={styles.title}>{this.state.showQuestion ? question : answer}</Text>
                            <TouchableOpacity
                                onPress={() => this.toggleView()}
                            >
                                <Text>{this.state.showQuestion ? 'Show Answer': 'Show Question'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity
                            style={styles.buttonPlain}
                            onPress={() => this.submitAnswer('incorrect')}
                        >
                            <Text style={styles.buttonDarkText}>Incorrect</Text>
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