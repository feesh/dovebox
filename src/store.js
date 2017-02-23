// App store
import { createStore, combineReducers, compose } from 'redux';

import doves from './data/doves';

import rootReducer from './reducers/index';


// create an object for the default data
// Swap this to pull from API later
const defaultState = {
  doves
};

const store = createStore(rootReducer, defaultState);

export default store;
