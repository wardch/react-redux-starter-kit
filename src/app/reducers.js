import { combineReducers } from '@reduxjs/toolkit'
import columnReducer from '../features/column/columnSlice'

/*
I left this reducer in here as an example for how to add future reducers. Once
you add you first reducer feel free to delete it.

import columnReducer from '../features/column/columnSlice'
*/

export default combineReducers({
  columns: columnReducer
})
