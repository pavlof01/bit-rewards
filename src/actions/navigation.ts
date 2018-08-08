import { createAction } from './helpers';
import { ActionsUnion } from './types';

export const OPEN_WALLET_MERCHANT = 'OPEN_WALLET_MERCHANT';

export const NavigationActions = {
  openWalletMerchant: () => createAction(OPEN_WALLET_MERCHANT),
};

export type NavigationActions = ActionsUnion<typeof NavigationActions>;
