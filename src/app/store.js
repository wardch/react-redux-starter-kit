import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage'
import * as middleware from './middleware/index'
import thunk from 'redux-thunk'

const persistedState = loadFromLocalStorage()

const middlewareToApply = [logger, thunk, ...Object.values(middleware)]

const loadMiddleWare = () => {
  return applyMiddleware(...middlewareToApply)
}

const configureStore = () => {
  const store = createStore(rootReducer, persistedState, loadMiddleWare())

  store.subscribe(() => {
    saveToLocalStorage(store.getState())
  })

  return store
}

export default configureStore
