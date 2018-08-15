import { combineReducers } from 'redux';
import session from './session';
import navigation from './navigation';
import history from './history';
import merchant from './merchant';
import specialOffers from './specialOffers';

const reducers = combineReducers({
  nav: navigation,
  session,
  history,
  merchant,
  specialOffers,
});

export default reducers;
