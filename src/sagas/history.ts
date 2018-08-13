import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../services/Api';
import * as historyActions from '../actions/history';

function* transactionHistoryFlow(action: historyActions.HistoryActions) {
  try {
    // TODO: remove hardcoded token when auth api was ready.
    Api.setAuthToken('12345');
    const responseData = yield call(Api.getTransactionList, action.payload.partnerKey, action.payload.page);
    yield put(historyActions.HistoryActions.fetchTransactionListSuccess(responseData.data.items));
  } catch (err) {
    yield put(historyActions.HistoryActions.fetchTransactionListFailure(err));
  }
}

export function* transactionHistoryData() {
  yield takeLatest(historyActions.FETCH_TRANSACTION_LIST_STARTED, transactionHistoryFlow);
}
