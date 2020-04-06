import logger from 'redux-logger'
import rootReducer from './reducers'
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'
import { configureStore } from '@reduxjs/toolkit'

/*
  by default we are saving the state to localStorage, can configure if you want to change it
*/

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromLocalStorage(),
  middleware: [thunk, logger]
})

store.subscribe(throttle(
  () => {
    saveToLocalStorage(store.getState())
  }, 1000)
)

export default store
