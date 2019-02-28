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

const initialState = {
  posts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_FETCH_SUCCESS:
      return Object.assign({}, state, { posts: action.posts })
    case POST_FETCH_FAIL:
      return Object.assign({}, action.message)
    default:
      return state
  }
}
