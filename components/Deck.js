import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import { connect } from 'react-redux';
import { style } from '../style/styles';

class Deck extends Component {
    static navigationOptions = ({ navigation }) => {
        const { deckName } = navigation.state.params;
        return { title: deckName }
    }

    // Animated: https://facebook.github.io/react-native/docs/animated
    state = {
        opacity: new Animated.Value(0)
    }

    componentDidMount() {
        const { opacity } = this.state;
        Animated.timing(opacity, {toValue: 1, duration: 500}).start();
    }

    render() {
        const { opacity } = this.state;
        const { deckId } = this.props;
        const { questions, title } = this.props.deck;
        
        // Press deck and generate animation.
        return (
            <Animated.View style={[styles.deck, { opacity }]}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.count}>{questions.length} {questions.length === 1 ? `card` : `cards`}</Text>
                <TouchableOpacity
                    style={[styles.btn, {marginTop: 50}]}
                    onPress={() => this.props.navigation.navigate('AddCard', {deckId: deckId})}
                >
                    <Text style={styles.btnText}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.btn, {backgroundColor: black}]}
                    onPress={() => (questions.length === 0 ? alert('Get started by adding few cards!') : this.props.navigation.navigate('Question', {deckId: deckId}))}
                >
                    <Text style={[styles.btnText, {color: white}]}>Start Quiz!</Text>
                </TouchableOpacity>
            </Animated.View>
        )
    }
}

const mapStateToProps = (state, {navigation}) => {
    const { deckId } = navigation.state.params
    return {
        deckId,
        deck: state[deckId],
    }
}
export default connect(mapStateToProps)(Deck);