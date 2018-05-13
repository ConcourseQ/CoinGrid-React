// Modules
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'

// Store
import store from './store';

// Routes
import Routes from './Routes'


ReactDOM.render(
  <Provider store={store}>
    <div>
      <Routes />
    </div>
  </Provider>,
  document.getElementById('root'))

registerServiceWorker()
