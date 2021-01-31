import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { switchPage } from '../store/index'

const Child = (props) => {
  console.log('child render')
  return (
    <div>
      child:{props.child.value}
    </div>
  )
}

function User(props) {
  let time;
  console.log('hook page render:', props)

  const [child, setChild] = useState({ value: 0 })

  const toHome = () => {
    props.history.push('/home');
    props.switchPage('/home')
  }


  useEffect(() => {
    time = setInterval(() => {
      // setChild(child + 1) // 这里的 child 始终是 0;
      // setChild(Math.random())

      child.value = child.value + 1;
      console.log(child)
      setChild(child) // 这个时候 react 不会更新
      // setChild({ ...child }) // 必须这么写才能更新
    }, 1000)

    return ()=>{
      clearInterval(time)
    }
  }, [])

  return (
    <>
      <div onClick={toHome}>toHome</div>
      <div>parent:{child.value}</div>
      <Child child={child} />
    </>
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