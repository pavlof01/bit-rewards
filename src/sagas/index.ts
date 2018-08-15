import { all, fork } from 'redux-saga/effects';
import {
  transactionHistoryData,
} from './history';
import {
  offerActionsListData,
  offerRewardListData,
} from './specialOffers';

const rootSagas = function* root() {
  yield all([
    fork(transactionHistoryData),
    fork(offerActionsListData),
    fork(offerRewardListData),
  ]);
};

export default rootSagas;
