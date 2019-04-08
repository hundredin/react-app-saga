import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '../api'
import {
  USER_GET,
  USER_LIST_GET,
  USER_JOIN_STEP1_SUBMIT,
  USER_JOIN_STEP2_SUBMIT,
  USER_JOIN_SUCCESS,
  USER_JOIN_FAIL
} from '../modules/user'

function* join(action) {
  try {
    const { data } = yield call(Api.user.createUser, action.payload)
    yield put({ type: USER_JOIN_SUCCESS, payload: data })
  } catch (e) {
    yield put({ type: USER_JOIN_FAIL, message: e.message })
  }
}

function* user(action) {
  try {
    const { data } = yield call(Api.user.fetchUser, action.payload)
    yield put({ type: 'USER_GET_SUCCESS', payload: data })
  } catch (e) {
    yield put({ type: 'USER_GET_FAIL', message: e.message })
  }
}

function* userList() {
  try {
    // const { data } = yield call(Api.user.fetchUserList)
    const data = [{ id: 1, name: 'jason' }, { id: 2, name: 'kevin' }]
    yield put({ type: 'USER_LIST_GET_SUCCESS', payload: data })
  } catch (e) {
    yield put({ type: 'USER_LIST_GET_FAIL', message: e.message })
  }
}

function* userSaga() {
  yield takeEvery(USER_JOIN_STEP1_SUBMIT, join)
  yield takeEvery(USER_JOIN_STEP2_SUBMIT, join)
  yield takeEvery(USER_GET, user)
  yield takeEvery(USER_LIST_GET, userList)
}

export default userSaga
