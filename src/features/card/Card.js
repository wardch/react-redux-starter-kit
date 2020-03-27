import React from 'react'
import { useDispatch } from 'react-redux'
import './Card.css'

export function Card ({ card, moveCard }) {
  const dispatch = useDispatch()

  return (
    <div className='Card'>
      <div className={'Card--left-arrow'} onClick={() => {
        if (card.columnId === 1) { return }
        dispatch(moveCard({ card: card, targetColumnId: card.columnId - 1 }))
      } }>
        &larr;
      </div>
      <div className={'Card--text'}>
        {card.text}
      </div>
      <div className={'Card--right-arrow'} onClick={() => {
        if (card.columnId === 4) { return }
        dispatch(moveCard({ card: card, targetColumnId: card.columnId + 1 }))
      } }>
        &rarr;
      </div>
    </div>
  )
}
