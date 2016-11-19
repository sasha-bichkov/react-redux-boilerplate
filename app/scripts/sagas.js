import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { CHANGE_MESSAGE } from './constants/example';
// import axios from 'axios';

function* helloSaga2() {
  // const fetchUser = axios.get('http://localhost:3333');
  try {
    yield call(fetch, '/scores');
    yield put({ type: 'USER_FETCH_SUCCEEDED', text: 'bla-bla' });
  } catch (e) {
    yield put({ type: 'USER_FETCH_ERROR', message: e.message });
  }
}

export function* mySaga() {
  yield* takeEvery(CHANGE_MESSAGE, helloSaga2);
}
