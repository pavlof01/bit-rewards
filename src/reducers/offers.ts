import { fromJS } from 'immutable';
import * as sessionActions from '../actions/session';

const initialState = fromJS({
  isFetching: false,
  carouselItems: [],
  earnBitItems: [],
  redeemBitItems: [],
  error: null,
});

export const offersReducer = (state = initialState, action: sessionActions.SessionActions) => {
  switch (action.type) {
    case sessionActions.LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
};

export default offersReducer;
