import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addCard,
  moveCard,
  selectCards,
  selectTitle
} from './columnSlice'
import './Column.sass'
import { Card } from '../card/Card'

const handleOnClick = (columnId, dispatch) => {
  const cardText = window.prompt()
  const card = createCard(columnId, cardText)
  dispatch(addCard(card))
}

const createCard = (columnId, cardText) => {
  return (
    {
      columnId: columnId,
      text: cardText,
      cardId: null
    }
  )
}

const createCards = (cards, columnId) => {
  return cards.map(card => {
    return (
      <Card card={card} key={`columnId-${columnId}-cardId-${card.cardId}`} moveCard={moveCard}/>
    )
  })
}

export function Column ({ columnId }) {
  const cards = useSelector(selectCards)(columnId)
  const title = useSelector(selectTitle)(columnId)
  const dispatch = useDispatch()
  return (
    <div className={'Column'} key={`Column--${columnId}`}>
      <div className={`Column--header Column--header--${columnId}`}>
        {title}
      </div>
      <div className={'Column--body'}>
        <div className={'Column--cards-container'}>
          { createCards(cards, columnId) }
        </div>
        <div className={'Column--add-card'} onClick={() => handleOnClick(columnId, dispatch)}>
          + Add Card
        </div>
      </div>
    </div>
  )
}
