'use strict';

import { take, put, call, fork, select } from 'redux-saga/effects';
import * as Api from '../api';
import * as ActionTypes from '../action/action-types';
import * as Actions from '../action/actions';

function loginApi(credentials) {
  return Api.login(credentials);
}

export function* login(credentials) {
  const user = yield call(loginApi, credentials);
  if (user.success) {
    yield put(Actions.logged(user));
  }
  else {
    yield put(Actions.authErr());
  }
}

const inf = true;

export function* watchLogin() {
  while (inf) {
    const action = yield take(ActionTypes.LOGIN);
    yield fork(login, action.payload);
  }
}


const root = function* root() {
  yield [
    fork(watchLogin),
  ];
};

export default root;

