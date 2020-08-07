import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { switchPage } from '../store/index'


class Home extends React.Component {
  toUser(url) {
    this.props.switchPage(url)
  }
  render() {
    return (
      <div>
        <div onClick={this.toUser.bind(this, '/user/1')}><Link to="/user/1">toUser1</Link></div>
        <div onClick={this.toUser.bind(this, '/user/2')}><Link to="/user/2">toUser2</Link></div>
        <div onClick={this.toUser.bind(this, '/user/2')}><Link to="/user/3">toUser3</Link></div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchPage: bindActionCreators(switchPage, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);