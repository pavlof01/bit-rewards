import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../services/Api';
import * as merchantActions from '../actions/merchant';

function* merchantWalletFlow(action: historyActions.HistoryActions) {
  try {
    const responseData = yield call(Api.getMerchantWallet, action.payload.partnerKey);
    yield put(merchantActions.MerchantActions.fetchWalletMerchantInfoSuccess(responseData.data));
  } catch (err) {
    yield put(merchantActions.MerchantActions.fetchWalletMerchantInfoFailure(err));
  }
}

export function* merchantWalletData() {
  yield takeLatest(merchantActions.FETCH_WALLET_MERCHANT_INFO_STARTED, merchantWalletFlow);
}
