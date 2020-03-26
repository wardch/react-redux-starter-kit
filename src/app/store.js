import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import rootReducer from './reducers'

export default configureStore({
  reducer: rootReducer,
  middleware: [logger, ...getDefaultMiddleware()]
})
