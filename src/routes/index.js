import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BasicLayout from '../layout/index';



class Routes extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <Route path='/' render={() => (
          <BasicLayout />
        )} />
      </BrowserRouter>
    )
  }
}

export default Routes;