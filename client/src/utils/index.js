import { checkPropTypes } from 'prop-types';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import contactReducers from '../components/ContactPage/reducers';

/* Test function which checks for attributes within the component */
export const findByTestAttr = (component, attr) => {
    return component.find(`[test-attr='${attr}']`);
};

/* Test function to validate props of a component */
export const checkProps = (component, expectedProps) => {
    return checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
};

/* Test function to create the test redux store for redux related tests */
const middleware = [ReduxThunk];
export const testReduxStore = (initState) => {
    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
    return createStoreWithMiddleware(contactReducers, initState);
};