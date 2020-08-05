import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='app'>
        react demo
        <Time name='时钟'></Time>
      </div>
    )
  }
}


class Time extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date().getTime() };
  }

  render() {
    return (
      <div>
        {this.props.name}-{this.state.date}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

