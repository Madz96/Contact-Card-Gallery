const defaultState = {
    contacts: [],
    count: 0
};

const contactReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_CONTACTS":
            return { ...state, contacts: action.payload };
        case "SEARCH_FOR_CONTACT":
            return { ...state, contacts: action.payload };
        case "SET_CONTACT_COUNT":
            return { ...state, count: action.payload };
        default:
            return state;
    }
}

export default contactReducer;
