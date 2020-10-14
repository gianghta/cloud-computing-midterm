import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import players from './players';

export default combineReducers({
  auth,
  message,
  players,
});
