import { all, fork } from 'redux-saga/effects';
import {
  transactionHistoryData,
} from './history';

const rootSagas = function* root() {
  yield all([
    fork(transactionHistoryData),
  ]);
};

export default rootSagas;
