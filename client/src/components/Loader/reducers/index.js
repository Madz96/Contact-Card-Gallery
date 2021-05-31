const defaultState = {
    loaderStatus: true
}

const loaderReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_LOADER_STATUS":
            return { ...state, loaderStatus: action.payload };
        default:
            return state;
    }
}

export default loaderReducer