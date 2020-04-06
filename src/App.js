import React from 'react'
/*
To get started you can drop a component in between the App div, for example the
following would display a column component:

function App () {
  return (
    <>
      <div className={'App--background-grey'}/>
      <div className="App">
        <Column columnId={'1'}/>
      </div>
    </>
  )
}

Currently there is a column and card feature included in the /features directory.
I left these in there to serve as a reference for new features being built.
 Once you build out a feature or two, feel free to delete the /features/column and
/features/card folders with all sub-files.

import { Column } from './features/column/Column'
*/
import './App.sass'

function App () {
  return (
    <>
      <div className={'App--background-grey'}/>
      <div className="App">
        Hello World! Hello Squirrels!
      </div>
    </>
  )
}

export default App
