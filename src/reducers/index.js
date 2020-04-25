import { combineReducers } from 'redux';
import common from './common';

const rootReducer = combineReducers({
  general,
  user
});

export default rootReducer;
