import { checkPropTypes } from 'prop-types';
import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import contactReducers from '../components/ContactPage/reducers';

export const findByTestAttr = (component, attr) => {
    return component.find(`[test-attr='${attr}']`);
};

export const checkProps = (component, expectedProps) => {
    return checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
};

const middleware = [ReduxThunk];
export const testReduxStore = (initState) => {
    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
    return createStoreWithMiddleware(contactReducers, initState);
};