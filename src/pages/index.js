import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { switchPage } from '../store/redux'


function Index(props) {
  console.log('Index render: props —— ', props)

  const switchPage = (url) => {
    props.switchPage(url)
  }

  // ref
  const ref = useRef();

  return (
    <div ref={ref}>
      store page: {props.page}
      <hr />
      <button onClick={()=>{console.log(ref)}}>ref</button>
      <hr/>
      <div onClick={() => switchPage('/hook/1')}><Link to="/hook/1?a=1">toHookPage</Link></div>
      <div onClick={() => switchPage('/mc')}><Link to="/mc">toMc</Link></div>

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