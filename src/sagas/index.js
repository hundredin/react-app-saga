import user from './user'
import post from './post'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([
    user(),
    post(),
  ])
}
