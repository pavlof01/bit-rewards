import { put, takeLatest } from 'redux-saga/effects';
import Api from '../services/Api';
import * as appActions from '../actions/app';
import * as sessionActions from '../actions/session';

function* dynamicInitialRouteFlow() {
  try {
    // TODO: remove hardcoded token when auth api was ready.
    Api.setAuthToken('12345');
    yield put(sessionActions.SessionActions.loginSuccess());
  } catch (err) {
    yield put(sessionActions.SessionActions.logout());
  }
}

export function* dynamicInitialRouteData() {
  yield takeLatest(appActions.DYNAMIC_INITIAL_ROUTE, dynamicInitialRouteFlow);
}
