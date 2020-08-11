import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './common/less/reset.less';
import 'antd/dist/antd.less'

import Routes from './routes/index';

import { store } from './store/index';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Routes></Routes>
      </Provider>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

