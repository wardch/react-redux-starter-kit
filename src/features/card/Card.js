import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   selectCount
// } from './cardSlice'
import './Card.css'

export function Card ({ card }) {
  // const count = useSelector(selectCount)
  // const dispatch = useDispatch()
  // const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div className='Card'>
      <div className={'Card--left-arrow'}>
        &larr;
      </div>
      <div className={'Card--text'}>
        {card.text}
      </div>
      <div className={'Card--right-arrow'}>
        &rarr;
      </div>
    </div>
  )
}
