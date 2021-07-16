import { AsyncStorage } from 'react-native';

export const DECKS_KEY = 'UdacityFlashCards';

const decks = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'React is a Java framework.',
                answer: 'React is a JavaScript library written by the developers at Facebook to build cleaner reusable components'
            },
            {
                question: 'React state is an object.',
                answer: 'State is an object that determines the behavior of a component'
            },
        ]
    },
    DataStructures: {
        title: 'Data Structures',
        questions: [
            {
                question: 'An array is a datatype.',
                answer: 'An array is a sequence of elements of similar datatype'
            },
            {
                question: 'String is sequence of characters.',
                answer: 'An string is a sequence of characters'
            }
        ]
    }
}

function setData() {
    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
    return decks
}

export function formatDecksResults(results) {
    return results === null ? setData() : JSON.parse(results)
}