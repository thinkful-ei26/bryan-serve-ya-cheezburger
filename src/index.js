import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import CheeseList from './components/cheese-list'
import store from './store'


ReactDOM.render(
  <Provider store={store}>
  <CheeseList />
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
