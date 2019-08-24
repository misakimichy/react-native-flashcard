import { StylesSheet } from 'react-native';

const styles = StylesSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItem: 'center',
    },
    button: {
        borderRadius: 3,
        borderWidth: 1,
        padding: 10,
    },
    buttonText: {
        textAlign: 'center',
    },
    buttonDark: {
        backgroundColor: '#000',
    },
    buttonDarkText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        height: 40,
        weight: 300,
        borderRadius: 5,
    }
});

export default styles;