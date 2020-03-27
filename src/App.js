import React from 'react'
import { Column } from './features/column/Column'
import './App.sass'

function App () {
  return (
    <>
      <div className={'App--background-grey'}/>
      <div className="App">
        <Column columnId={1}/>
        <Column columnId={2}/>
        <Column columnId={3}/>
        <Column columnId={4}/>
      </div>
    </>
  )
}

export default App
