const defaultState = {
    status: true
}

const loaderReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_LOADER_STATUS":
            return { ...state, status: action.payload };
        default:
            return state;
    }
}

export default loaderReducer;