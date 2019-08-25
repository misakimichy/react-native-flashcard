import DecksReducer from './decks';

export const reducer = (state = initialState(), action) => {
    let decks = DecksReducer(state.decks, action)
    return { decks };
};

