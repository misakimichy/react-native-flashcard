import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';
import Card from './Card';
import Score from './Score';
import { styles } from '../styles/styles';

class Question extends Component {
    state = {
        index: 0,
        showAnswer: false,
        correct: 0,
        incorrect: 0
    }

    componentDidMount() {
        clearLocalNotification()
            .then(setLocalNotification)
    }

    handleToggle() {
        this.setState(previousState => ({
            showAnswer: !previousState.showAnswer
        }));
    }

    handleAnswer(result) {
        this.setState( state => ({
            index: state.index + 1,
            showAnswer: false,
            correct: result === 'correct' ? state.correct + 1 : state.correct,
            incorrect: result === 'incorrect' ? state.incorrect + 1 : state.incorrect,
        }))
    }

    // Reset the state
    restart() {
        this.setState({
            index: 0,
            showAnswer: false,
            correct: 0,
            incorrect: 0
        })
    }

    render() {
        const { deckId, deck } = this.props;
        const { index, showAnswer, correct, incorrect } = this.state;
        // Return boolean
        const showCard = index < deck.questions.length ? true : false;

        // Show Card component if showCard is true, and show Score component if showCard is false
        return(
            <View style={styles.center}>
                <Text style={styles.count}>{ showCard ? index + 1 : index }/{ deck.questions.length }</Text>
                {showCard
                ?(<Card
                        deck={deck}
                        flip={this.handleToggle}
                        index={index}
                        showAnswer={showAnswer}
                        answer={this.handleAnswer}
                    />
                )
                :(<Score
                        deck={deck}
                        deckId={deckId}
                        restart={this.restart}
                        correct={correct}
                        incorrect={incorrect}
                    />
                )}
            </View>
        )
    }
}

const mapStateToProps = (state, { navigation }) => {
    const { deckId } = navigation.state.params
    return {
        deckId,
        deck: state[deckId]
    }
}

export default connect(mapStateToProps)(Question);