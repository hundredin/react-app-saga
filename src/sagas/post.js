import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '../api'
import { POST_FETCH_REQUESTED } from '../modules/post'

function* fetchAllPosts(action) {
  console.log('fetch Post saga!')
  try {
    const { data } = yield call(Api.post.getAllPosts)
    yield put({ type: 'POSTS_FETCH_SUCCESS', posts: data })
  } catch (e) {
    yield put({ type: 'POSTS_FETCH_FAIL', message: e.message })
  }
}

function* postSaga() {
  yield takeEvery(POST_FETCH_REQUESTED, fetchAllPosts)
}

export default postSaga
