import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../services/Api';
import * as specialOffersActions from '../actions/specialOffers';

function* offerActionsListFlow(action: specialOffersActions.SpecialOfferActions) {
  try {
    // TODO: remove hardcoded token when auth api was ready.
    Api.setAuthToken('12345');
    const responseData = yield call(Api.getOfferActionsList, action.payload.page, action.payload.perPage);
    yield put(specialOffersActions.SpecialOfferActions.fetchOfferActionsListSuccess(responseData.data.items));
  } catch (err) {
    yield put(specialOffersActions.SpecialOfferActions.fetchOfferActionsListFailure(err));
  }
}

export function* offerActionsListData() {
  yield takeLatest(specialOffersActions.FETCH_OFFER_ACTIONS_LIST_STARTED, offerActionsListFlow);
}
