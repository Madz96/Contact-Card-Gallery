import { createStore } from 'redux';

import contactReducers from './components/ContactPage/reducers';

const store = createStore(contactReducers);

export default store;