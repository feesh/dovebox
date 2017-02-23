// App store
import { createStore, combineReducers, compose } from 'redux';

import doves from './data/doves';

import rootReducer from './reducers/index';

console.log('where my doves');
console.log(doves);
// create an object for the default data
const defaultState = {
  doves
};

const store = createStore(rootReducer, defaultState);

export default store;
