import { call, put, takeLatest } from 'redux-saga/effects';
import Api from '../services/Api';
import * as specialOffersActions from '../actions/specialOffers';

function* offerActionsListFlow(action: specialOffersActions.SpecialOfferActions) {
  try {
    const responseData = yield call(Api.getOfferActionsList, action.payload.page, action.payload.perPage);
    yield put(specialOffersActions.SpecialOfferActions.fetchOfferActionsListSuccess(responseData.data.items));
  } catch (err) {
    yield put(specialOffersActions.SpecialOfferActions.fetchOfferActionsListFailure(err));
  }
}

export function* offerActionsListData() {
  yield takeLatest(specialOffersActions.FETCH_OFFER_ACTIONS_LIST_STARTED, offerActionsListFlow);
}

function* offerRewardListFlow(action: specialOffersActions.SpecialOfferActions) {
  try {
    const responseData = yield call(Api.getOfferRewardList, action.payload.page, action.payload.perPage);
    yield put(specialOffersActions.SpecialOfferActions.fetchOfferRewardListSuccess(responseData.data.items));
  } catch (err) {
    yield put(specialOffersActions.SpecialOfferActions.fetchOfferRewardListFailure(err));
  }
}

export function* offerRewardListData() {
  yield takeLatest(specialOffersActions.FETCH_OFFER_REWARD_LIST_STARTED, offerRewardListFlow);
}
