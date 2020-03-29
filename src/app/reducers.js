import { combineReducers } from '@reduxjs/toolkit'
import columnReducer from '../features/column/columnSlice'

export default combineReducers({
  columns: columnReducer
})
