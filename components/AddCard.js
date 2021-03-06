import React, { Component} from 'react';
import { Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addCard } from '../actions/index';
import { saveCard } from '../utils/api';
import { styles } from '../style/styles';

SubmitBtn = ({ onPress }) => {
    return (
        <TouchableOpacity
         style={styles.submitBtn}
         onPress={onPress}>
            <Text style={styles.submitBtnText}>Create Card</Text>
        </TouchableOpacity>
    )
}

class AddCard extends Component{
    state = {
        question: '',
        answer: ''
    }

    // Arrow function fix the error
    submit = () => {
        const { question, answer } = this.state;
        const { deckId, dispatch } = this.props;
        if(question === '' || answer === ''){
            alert('Please fill in both the input fields')
            return 
        }

        dispatch(addCard(deckId, question, answer));
        this.setState({
            question: '',
            answer: ''
        })
        saveCard(deckId, question, answer);
    }

    render(){
        const { question, answer } = this.state;
        
        return(
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <Text style={styles.label}>Question</Text>
                <TextInput
                    value={question}
                    style={styles.input}
                    onChangeText={(question) => this.setState({question})}
                    autoFocus={true}
                />
                <Text style={styles.label}>Answer</Text>
                <TextInput
                    value={answer}
                    style={styles.input}
                    onChangeText={(answer) => this.setState({answer})}
                />
                <SubmitBtn onPress={this.submit} />
            </KeyboardAvoidingView>
        )
    }
}

function mapStateToProps(state, { navigation }){
    const { deckId } = navigation.state.params
    return {
        deckId
    }
};

export default connect(mapStateToProps)(AddCard);