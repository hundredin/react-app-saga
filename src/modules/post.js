import { fromJS } from 'immutable'
import { createReducer } from 'redux-immutablejs'

export const POST_FETCH_REQUESTED = 'POST_FETCH_REQUESTED'
export const POST_FETCH_SUCCESS = 'POST_FETCH_SUCCESS'
export const POST_FETCH_FAIL = 'POST_FETCH_FAIL'

export function fetchAllPosts(userId) {
  return {
    type: POST_FETCH_REQUESTED,
    payload: {
      userId
    }
  }
}

const initialState = fromJS({
  posts: []
})

export default createReducer(initialState, {
  [POST_FETCH_REQUESTED]: (state, action) => state.set('posts', fromJS(action.posts)),
  [POST_FETCH_FAIL]: () => console.log('Post Fetch Fail')
})
