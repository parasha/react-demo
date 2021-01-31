import React from 'react';
import ReactDOM from 'react-dom';
// 路由
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import Routes from './routes/index';
// redux
import { Provider } from 'react-redux';
import { store } from './store/index';


import Index from './pages/index';
import HookPage from './pages/hook';
import MC from './pages/memo&callback';

import './common/less/reset.less';
import 'antd/dist/antd.less'


console.log('环境：', APP_ENV)

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Index>
          <Switch>
            <Route path='/hook/:id' component={HookPage} />
            <Route path='/mc' component={MC} />
          </Switch>
        </Index>
      </Router>
    </Provider>
  )

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

