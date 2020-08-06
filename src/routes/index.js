import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Index from '../pages/index';
import Home from '../pages/home';
import User from '../pages/user';



function createRoutes(config) {

  config.map(item=>{
    return 
  })

  return class extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
      return (
        <BrowserRouter>
          <Route path='/' component={Index} />
          <Route path="/home" component={Home} />
          <Route path="/user" component={User} />
        </BrowserRouter>
      )
    }
  }
}


export default Routes;