import * as React from "react";
import * as ReactDOM from "react-dom";
// redux
import { Provider } from 'react-redux';
import { store } from './store/index';
// router
import Routes from './routes/index.tsx';
// CSS
import './common/less/reset.less';
import 'antd/dist/antd.less'

function App() {

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

