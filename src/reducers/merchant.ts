/**
 * Кошелек мерчанта.
 */

import { fromJS } from 'immutable';
import * as sessionActions from '../actions/session';
import * as merchantActions from '../actions/merchant';

const initialState = fromJS({
  isFetching: false,
  title: '',
  error: null,
});

export const historyReducer = (state = initialState, action: sessionActions.SessionActions | merchantActions.MerchantActions) => {
  switch (action.type) {
    case merchantActions.FETCH_WALLET_MERCHANT_INFO_STARTED: {
      return state
        .set('isFetching', true)
        .set('error', null);
    }
    case merchantActions.FETCH_WALLET_MERCHANT_INFO_SUCCESS: {
      return state
        .set('isFetching', false)
        .set('error', null);
    }
    case merchantActions.FETCH_WALLET_MERCHANT_INFO_FAILURE: {
      return state
        .set('isFetching', false)
        .set('error', action.payload);
    }
    case sessionActions.LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};

export default historyReducer;
