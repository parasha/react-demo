import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { switchPage } from '../store/index'

class User extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.match.params)
  }
  toHome() {
    this.props.history.push('/home');
    this.props.switchPage('/home')
  }
  render() {
    return (
      <div onClick={this.toHome.bind(this)}>toHome</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(User);