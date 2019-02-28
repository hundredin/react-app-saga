import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import { routerMiddleware } from 'connected-react-router'

import createRootReducer from '../modules'
import sagas from '../sagas'

// LOCAL, DEV, SANDBOX
export default function configureStore(initialState, history) {
  console.log('isLocal: ' + __LOCAL__)

  const sagaMiddleware = createSagaMiddleware()

  const middleware = applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
    logger
  )

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeWithDevTools(middleware)
  )

  sagaMiddleware.run(sagas)

  return store
}
