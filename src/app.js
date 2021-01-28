import React from 'react';
import ReactDOM from 'react-dom';
// 路由
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import Routes from './routes/index';
// redux
import { Provider } from 'react-redux';
import { store } from './store/index';


import Index from './pages/index';
import Home from './pages/home';
import User from './pages/user';
import Hook from './pages/hook';
import Tab from './pages/tab/index';
import Children from './pages/children';

import './common/less/reset.less';
import 'antd/dist/antd.less'


console.log('环境：', APP_ENV)

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Index>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/user' component={User} />
            <Route path='/hook' component={Hook} />
            <Route path='/tab' component={Tab} />
            <Route path='children' component={Children}></Route>
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

