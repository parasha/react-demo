import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Index from '../pages/index';
import Home from '../pages/home';
import User from '../pages/user';

class Routes extends React.Component {

  render() {
    return (
      <BrowserRouter>
          <Route path='/' exact component={Index} />
          <Route path="/home" component={Home} />
          <Route path="/user" component={User} />
      </BrowserRouter>
    )
  }
}


export default Routes;