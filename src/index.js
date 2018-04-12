import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'))
