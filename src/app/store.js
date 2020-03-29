import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage'
import * as middleware from './middleware/index'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'

/*
  by default we are saving the state to localStorage, can configure if you want to change it
*/

const persistedState = loadFromLocalStorage()

const middlewareToApply = [logger, thunk, ...Object.values(middleware)]

const loadMiddleWare = () => {
  return applyMiddleware(...middlewareToApply)
}

const configureStore = () => {
  const store = createStore(rootReducer, persistedState, loadMiddleWare())

  store.subscribe(throttle(
    () => {
      saveToLocalStorage(store.getState())
    }, 1000)
  )

  return store
}

export default configureStore
