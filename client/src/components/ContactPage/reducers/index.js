const defaultState = {
    contacts: []
};

const contactReducers = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_CONTACTS":
            return { ...state, contacts: action.payload };
        case "SEARCH_FOR_CONTACT":
            return { ...state, contacts: action.payload };
        default:
            return state;
    }
}

export default contactReducers;
