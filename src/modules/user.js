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

const initialState = {
  users: [],
  me: {}
}

export default (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case USER_JOIN_SUCCESS:
      return Object.assign({}, state, { me: action.payload })
    case USER_GET_SUCCESS:
      return Object.assign({}, state, { me: action.payload })
    case USER_LIST_GET_SUCCESS:
      return Object.assign({}, state, { users: action.payload})
    default:
      return state
  }
}
