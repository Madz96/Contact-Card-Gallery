const defaultState = {
    contacts: []
};

const contactReducers = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_CONTACTS":
            return { ...state, contacts: action.payload };
        case "SEARCH_BY_NAME":
            return { ...state, contacts: action.payload };
        case "SEARCH_BY_COUNTRY":
            return { ...state, contacts: action.payload };
        default:
            return state;
    }
}

export default contactReducers;
