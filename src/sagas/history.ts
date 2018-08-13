import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../services/Api';
import * as historyActions from '../actions/history';

function* transactionHistoryFlow(action: historyActions.HistoryActions) {
  try {
    const items = yield call(Api.getTransactionList, 'test-partner-key', 1);
    yield put(HistoryActions.fetchTransactionListSuccess(items));
  } catch (err) {
    yield put(HistoryActions.fetchTransactionListFailure(err));
  }
}

export function* transactionHistoryData() {
  yield takeLatest(historyActions.FETCH_TRANSACTION_LIST_STARTED, transactionHistoryFlow);
}
