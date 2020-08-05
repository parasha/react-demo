import React from 'react';
import ReactDOM from 'react-dom';

import './common/less/reset.less';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const list = [1,2,3].map(item=>{
      return <li key={item}>{item}</li>
    })
    return (
      <div id='app'>
        react demo
        {false ? <Time name='时钟'></Time>: <ul>{list}</ul>}
      </div>
    )
  }
}


class Time extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date().getTime() };
    console.log('constructor')
  }

  componentWillMount() {
    console.log('willMount')
  }
  componentDidMount() {
    console.log('DidMount')
  }

  click(params) {
    console.log('click', this, params)
  }

  render() {
    return (
      <div onClick={this.click.bind(this, 1)}>
        {this.props.name}-{this.state.date}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

