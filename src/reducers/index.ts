import { combineReducers } from 'redux';
import session from './session';
import navigation from './navigation';
import history from './history';

const reducers = combineReducers({
  nav: navigation,
  session,
  history,
});

export default reducers;
