import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import './index.css'
import App from './components/App'
import { Provider } from 'react-redux'
import reducers from './infrastructure/reducers'
import { asyncDispatchMiddleware } from './infrastructure/asyncDispatchMiddleware'

const store = createStore(
  reducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(asyncDispatchMiddleware)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);