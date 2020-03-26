import { createSlice } from '@reduxjs/toolkit'
import initialState from './columnsInitialState'

const addNewCard = (state, card) => {
}

export const slice = createSlice({
  name: 'column',
  initialState: initialState,
  reducers: {
    addCard: (state, action) => {
      const nextState = addNewCard(state.columns.columns, action.payload)
      state.columns = nextState
    }
  }
})

export const { addCard } = slice.actions

export const selectCards = state => columnId => {
  return state.columns.columns[`column${columnId}`].cards
}

export const selectTitle = state => columnId => {
  return state.columns.columns[`column${columnId}`].title
}

export default slice.reducer
