import React from 'react';
import ReactDOM from 'react-dom';

import './common/less/reset.less';

import Routes from './routes/index';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Routes></Routes>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

