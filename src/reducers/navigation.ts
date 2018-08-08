import { NavigationActions } from 'react-navigation';
import AppNavigator from '../AppNavigator';

import * as navigationActions from '../actions/navigation';
import * as sessionActions from '../actions/session';

const getStateForAction = (action: any, state?: any) => {
  return AppNavigator.router.getStateForAction(action, state);
};

const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const initialState = getStateForAction(firstAction);

export const navigationReducer = (state = initialState, action: any) => {
  let nextState;
  switch (action.type) {
    case sessionActions.LOGOUT: {
      return state;
    }
    case navigationActions.OPEN_WALLET_MERCHANT: {
      const navigateWalletMerchantAction = NavigationActions.navigate({ routeName: 'WalletMerchant' });
      nextState = getStateForAction(navigateWalletMerchantAction, state);
      break;
    }
    default:
      nextState = getStateForAction(action, state);
      break;
  }
  return nextState || state;
};

export default navigationReducer;
