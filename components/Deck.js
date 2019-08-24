import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from '../styles';
import { storeUrl } from 'expo/build/StoreReview/StoreReview';

class Deck extends Component {
    static navigationOptions = ({ navigation }) => {
        const { card } = navigation.state.params;
        return {
            title: card.title
        }
    }

    render() {
        const { card, navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.deck}>
                        <Text style={styles.title}>{card.title}</Text>
                        <Text>{card.questions.length}</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('createCard', { card: card })}>
                        <Text styles={styles.buttonText}>Add Card</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        card: props.navigation.state.params.card
    }
}
export default connect(mapStateToProps)(Deck);