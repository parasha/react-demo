import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Index from '../pages/index';
import Home from '../pages/home';
import User from '../pages/user';



class Routes extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <Route path='/' render={() => (
          <Index>
            <Route path="/home" component={Home} />
            <Route path="/user/:id" component={User} />
          </Index>
        )} />
      </BrowserRouter>
    )
  }
}

export default Routes;