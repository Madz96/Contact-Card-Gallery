import { createStore, combineReducers } from 'redux';

import contactReducer from './components/ContactPage/reducers';
import loaderReducer from './components/Loader/reducers';

const rootReducer = combineReducers({ contact: contactReducer, loader: loaderReducer });
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;