// Modules
import React from 'react'
import {HashRouter, Route, Router, Switch } from 'react-router-dom'
import HashChange from 'react-hashchange'
import Async from 'react-code-splitting'

// History
import appHistory from 'appHistory'

// Routes
const Example  = props => <Async load={import('Routes/Example/Example')}       componentProps={props}/>


const Routes = (props) => (
  <Router history={appHistory}>
    <div>
      <Switch>
        <Route path="/"               component={Example} />
      </Switch>
    </div>
  </Router>
)

appHistory.listen((location, action) => {
  if(action !== 'POP') {
    window.scrollTo(0, 0)
  }
  window.dispatchEvent(new HashChangeEvent('hashchange'))
})

export default Routes
