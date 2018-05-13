// Modules
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

// Reducers
import reducer from './Reducers'

export default createStore(reducer, (() => {
  if(process.env.NODE_ENV === 'development') {
    return applyMiddleware(promise(), thunk, createLogger())
  } else {
    return applyMiddleware(promise(), thunk)
  }
})())
