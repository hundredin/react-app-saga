import { combineReducers } from 'redux'
import user from './user'
import post from './post'

import { connectRouter } from 'connected-react-router'

const rootReducers = history =>
  combineReducers({
    router: connectRouter(history),
    user,
    post
  })

export default rootReducers
