import { createSlice } from '@reduxjs/toolkit'
import initialState from './columnsInitialState'

const addNewCard = (state, card) => {
  const cardWithId = findCardWithId(state, card)
  return state[`column${cardWithId.columnId}`].cards.push(cardWithId)
}

const removeCard = (state, cardToRemove, targetColumnId) => {
  state[`column${cardToRemove.columnId}`].cards = state[`column${cardToRemove.columnId}`].cards.filter(card => {
    return card.cardId !== cardToRemove.cardId
  })
  return state
}

const findCardWithId = (state, card) => {
  if (card.cardId) {
    return card
  } else {
    card.cardId = state.currentCardId + 1
    state.currentCardId += 1
    return card
  }
}

export const slice = createSlice({
  name: 'columns',
  initialState: initialState,
  reducers: {
    addCard: (state, action) => {
      addNewCard(state, action.payload)
    },
    moveCard: (state, action) => {
      const { card, targetColumnId } = action.payload
      removeCard(state, card)
      const cardToAdd = { ...card, columnId: targetColumnId }
      addNewCard(state, cardToAdd)
    }
  }
})

export const { addCard, moveCard } = slice.actions

export const selectCards = state => columnId => {
  return state.columns[`column${columnId}`].cards
}

export const selectTitle = state => columnId => {
  return state.columns[`column${columnId}`].title
}

export default slice.reducer
