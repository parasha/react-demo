import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { switchPage } from '../store/index'


function Index(props) {
  console.log('index props：', props)
  const switchPage = (url) => {
    props.switchPage(url)
  }

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);


  const addCount = () => {
    setCount(count + 1)
  }

  const addCount2 = () => {
    setCount2(count2 + 1)
  }

  useEffect(() => {
    console.log('副作用')
    return () => {
      console.log('副作用清除');
    }
  }, [count]);

  useEffect(() => {
    console.log('副作用2')
    return () => {
      console.log('副作用2清除');
    }
  }, [count2]);


  // ref
  const ref = useRef();

  return (
    <div ref={ref}>
      store page: {props.page}
      <br />
        hook: {count}; {count2}
      <button onClick={addCount}>+1</button>
      <button onClick={addCount2}>+1</button>

      <div onClick={() => switchPage('/user/1')}><Link to="/user/1">toUser1</Link></div>
      <div onClick={() => switchPage('/hook')}><Link to="/hook">toHook</Link></div>
      <div onClick={() => switchPage('/home')}><Link to="/home">toHome</Link></div>
      <div onClick={() => switchPage('/tab')}><Link to="/tab">toTab</Link></div>
      <div onClick={() => switchPage('/children')}><Link to="/children">toChildren</Link></div>

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