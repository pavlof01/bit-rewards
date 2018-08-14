/**
 * Кошелек мерчанта.
 */

import { createAction } from './helpers';
import { ActionsUnion } from './types';

export const FETCH_WALLET_MERCHANT_INFO_STARTED = 'FETCH_WALLET_MERCHANT_INFO_STARTED';
export const FETCH_WALLET_MERCHANT_INFO_SUCCESS = 'FETCH_WALLET_MERCHANT_INFO_SUCCESS';
export const FETCH_WALLET_MERCHANT_INFO_FAILURE = 'FETCH_WALLET_MERCHANT_INFO_FAILURE';

export const MerchantActions = {
  fetchWalletMerchantInfo: (partnerKey: string) => createAction(
    FETCH_WALLET_MERCHANT_INFO_STARTED,
    { partnerKey },
  ),
  fetchWalletMerchantInfoSuccess: (data: any) => createAction(FETCH_WALLET_MERCHANT_INFO_SUCCESS, data),
  fetchWalletMerchantInfoFailure: (error: any) => createAction(FETCH_WALLET_MERCHANT_INFO_FAILURE, error),
};

export type MerchantActions = ActionsUnion<typeof MerchantActions>;
