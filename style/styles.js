import { StyleSheet } from 'react-native';
import { gray, lightGray, black, white, red, orange, blue, purple, lightPurple, pink } from '../utils/colors';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40
    },
    deck: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        color: black
    },
    question: {
        fontSize: 18,
        alignSelf: 'flex-start',
        color: black
    },
    input: {
        width: 250,
        height: 44,
        padding: 8,
        borderWidth: 1,
        borderColor: black,
        marginBottom: 15
    },
    count: {
        marginTop: 10,
        fontSize: 25,
        color: gray
    },
    item: {
        backgroundColor: white,
        borderRadius: 5,
        borderColor: black,
        borderWidth: 1,
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        width: 150,
        height: 50,
        backgroundColor: white,
        borderRadius: 5,
        borderColor: black,
        borderWidth: 1,
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        fontSize: 16,
        color: black
    },
    submitBtn: {
        backgroundColor: black,
        padding: 10,
        borderRadius: 5,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 100
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
})