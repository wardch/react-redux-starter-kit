import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addCard,
  moveCard,
  selectCards,
  selectTitle
} from './columnSlice'
import './Column.css'
import { Card } from '../card/Card'

const handleOnClick = (columnId, dispatch) => {
  const cardText = window.prompt()
  const card = {
    columnId: columnId,
    text: cardText,
    cardId: null
  }
  dispatch(addCard(card))
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
          {
            cards.map(card => {
              return (
                <Card card={card} key={`columnId-${columnId}-cardId-${card.cardId}`} moveCard={moveCard}/>
              )
            })
          }
        </div>
        <div className={'Column--add-card'} onClick={() => handleOnClick(columnId, dispatch)}>
          + Add Card
        </div>
      </div>
    </div>
  )
}
