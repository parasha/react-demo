import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { switchPage } from '../store/index'

function User(props){
  console.log('constructor:', props.match.params)

  const toHome = () => {
    props.history.push('/home');
    props.switchPage('/home')
  }

  return (
    <div onClick={toHome}>toHome</div>
  )
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