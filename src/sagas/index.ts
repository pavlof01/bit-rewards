import { all, fork } from 'redux-saga/effects';
import {
  loginData,
  logoutData,
  dynamicInitialRouteData,
} from './appInit';
import {
  transactionHistoryData,
} from './history';
import {
  offerActionsListData,
  offerRewardListData,
} from './specialOffers';

const rootSagas = function* root() {
  yield all([
    fork(loginData),
    fork(logoutData),
    fork(dynamicInitialRouteData),
    fork(transactionHistoryData),
    fork(offerActionsListData),
    fork(offerRewardListData),
  ]);
};

export default rootSagas;
