import React from 'react'
import { mount } from 'enzyme'
import { Column } from './Column'
import initialColumnsState from '../../features/column/columnsInitialState'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const mockStore = configureMockStore([thunk])

const store = mockStore(
  {
    columns: {
      ...initialColumnsState
    }
  }
)

describe('Column', () => {
  it('Renders a Column', () => {
    const column = mount(
      <Provider store={store}>
        <Column columnId={'1'}/>
      </Provider>
    )
    expect(column.html()).toContain('freeworld')
  })
})
