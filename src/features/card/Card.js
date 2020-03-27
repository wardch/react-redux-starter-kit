import React from 'react'
import { useDispatch } from 'react-redux'
import './Card.sass'

const handleOnClick = (direction, card, moveCard, dispatch) => {
  if (direction === 'left') {
    if (card.columnId === 1) { return }
    dispatch(moveCard({ card: card, targetColumnId: card.columnId - 1 }))
  } else {
    if (card.columnId === 4) { return }
    dispatch(moveCard({ card: card, targetColumnId: card.columnId + 1 }))
  }
}

export function Card ({ card, moveCard }) {
  const dispatch = useDispatch()

  return (
    <div className='Card'>
      <div className={'Card--left-arrow'} onClick={() => handleOnClick('left', card, moveCard, dispatch) }>
        &larr;
      </div>
      <div className={'Card--text'}>
        {card.text}
      </div>
      <div className={'Card--right-arrow'} onClick={() => handleOnClick('right', card, moveCard, dispatch) }>
        &rarr;
      </div>
    </div>
  )
}
