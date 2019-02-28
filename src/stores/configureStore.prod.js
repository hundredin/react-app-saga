import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { routerMiddleware } from 'connected-react-router'

import createRootReducer from '../modules'
import sagas from '../sagas'

// LOCAL, DEV, SANDBOX
export default function configureStore(initialState, history) {
  const sagaMiddleware = createSagaMiddleware()

  const middleware = applyMiddleware(routerMiddleware(history), sagaMiddleware)
  const store = createStore(
    createRootReducer(history),
    initialState,
    middleware
  )

  sagaMiddleware.run(sagas)

  return store
}
