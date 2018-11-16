import { combineReducers } from 'redux';
import catReducer from './catReducer';
import dogReducer from './dogReducer.js';

const rootReducer = combineReducers({
  cat: catReducer,
  dog: dogReducer
});

export default rootReducer;
