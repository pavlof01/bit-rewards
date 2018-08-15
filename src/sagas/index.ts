import { all, fork } from 'redux-saga/effects';
import {
  transactionHistoryData,
} from './history';
import {
  offerActionsListData,
} from './specialOffers';

const rootSagas = function* root() {
  yield all([
    fork(transactionHistoryData),
    fork(offerActionsListData),
  ]);
};

export default rootSagas;
