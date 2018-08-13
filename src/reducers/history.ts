/**
 * История транзакций.
 */

import { fromJS } from 'immutable';
import * as sessionActions from '../actions/session';

const initialState = fromJS({
  isFetching: false,
  items: [],
  error: null,
});

export const historyReducer = (state = initialState, action: sessionActions.SessionActions) => {
  switch (action.type) {
    case sessionActions.LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};

export default historyReducer;
