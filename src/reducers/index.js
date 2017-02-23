// Reducer reducer
import { combineReducers } from 'redux';

import doves from './list-reducer';

const rootReducer = combineReducers({ doves });

export default rootReducer;
