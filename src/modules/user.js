import { createReducer } from 'redux-immutablejs'
import { fromJS } from 'immutable'

export const USER_GET = 'USER_GET'
export const USER_LIST_GET = 'USER_LIST_GET'

export const USER_JOIN_STEP1_SUBMIT = 'USER_JOIN_STEP1_SUBMIT'
export const USER_JOIN_STEP2_SUBMIT = 'USER_JOIN_STEP2_SUBMIT'

export const USER_JOIN_SUCCESS = 'USER_JOIN_SUCCESS'
export const USER_JOIN_FAIL = 'USER_JOIN_FAIL'
export const USER_GET_SUCCESS = 'USER_GET_SUCCESS'
export const USER_LIST_GET_SUCCESS = 'USER_LIST_GET_SUCCESS'

export const USER_FAIL = 'USER_FAIL'

export function joinStep1(userData) {
  return {
    type: USER_JOIN_STEP1_SUBMIT,
    payload: userData
  }
}

export function joinStep2() {
  return {
    type: USER_JOIN_STEP2_SUBMIT
  }
}

export function getUserList() {
  return {
    type: USER_LIST_GET
  }
}

const initialState = fromJS({
  users: [],
  me: {}
})

export default createReducer(initialState, {
  [USER_JOIN_SUCCESS]: (state, action) =>
    state.set('me', fromJS(action.payload)),
  [USER_GET_SUCCESS]: (state, action) =>
    state.set('me', fromJS(action.payload)),
  [USER_LIST_GET_SUCCESS]: (state, action) =>
    state.set('users', fromJS(action.payload))
})
