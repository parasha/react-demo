import React from 'react';
import ReactDOM from 'react-dom';
// 路由
import Routes from './routes/index';
// redux
import { Provider } from 'react-redux';
import { store } from './store/index';

import './common/less/reset.less';
import 'antd/dist/antd.less'


console.log('环境：', APP_ENV)

function App() {

  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  )

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

