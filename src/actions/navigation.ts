import { createAction } from './helpers';
import { ActionsUnion } from './types';

export const OPEN_WALLET_MERCHANT = 'OPEN_WALLET_MERCHANT';
export const OPEN_WALLET_HISTORY = 'OPEN_WALLET_HISTORY';

export const NavigationActions = {
  openWalletMerchant: () => createAction(OPEN_WALLET_MERCHANT),
  openWalletHistory: () => createAction(OPEN_WALLET_HISTORY),
};

export type NavigationActions = ActionsUnion<typeof NavigationActions>;
