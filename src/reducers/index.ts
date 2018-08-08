import { combineReducers } from 'redux';
import session from './session';
import navigation from './navigation';

const reducers = combineReducers({
  nav: navigation,
  session,
});

export default reducers;
