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
      <div id='app'>
        <Routes></Routes>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

