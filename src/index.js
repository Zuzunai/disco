import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import reducers from './infrastructure/reducers'

const store = createStore(
  reducers, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);