import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import css from './main.css'
import reducer from 'reducer'
import SortableTable from './components/SortableTable'
import Header from './components/Header'
import Dialog from './components/Dialog'

const store = createStore(reducer)

const App = () =>
  <Provider store={store}>
    <div className='App'>
      <Header />
      <SortableTable />
      <Dialog title='Add person' primary='Add' secondary='Cancel' />
    </div>
  </Provider>


ReactDOM.render(<App/>, document.getElementById('app'))
