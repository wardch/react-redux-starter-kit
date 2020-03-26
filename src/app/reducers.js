import { combineReducers } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import columnReducer from '../features/column/columnSlice'

export default combineReducers({
  counter: counterReducer,
  columns: columnReducer
})
