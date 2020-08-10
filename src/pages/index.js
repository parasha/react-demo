import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { switchPage } from '../store/index'


function Index(props) {
  const [count, setCount] = useState(0);

  const toUser = () => {
    props.switchPage('/user/1')
  }

  const addCount = ()=>{
    setCount(count + 1)
  }

  return (
    <div>
      store page: {props.page}
      <br />
        hook: {count}
      <button onClick={addCount}>+1</button>
      <div onClick={toUser}><Link to="/user/1">toUser1</Link></div>
      <hr />
      {props.children}
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Index);