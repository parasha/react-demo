import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { switchPage } from '../store/index'

class Index extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.children)
  }
  toUser() {
    this.props.switchPage('/user/1')
  }
  render() {
    return (
      <div>
        store page: {this.props.page}
        <div onClick={this.toUser.bind(this)}><Link to="/user/1">toUser1</Link></div>
        <hr />
        {this.props.children}
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

export default connect(mapStateToProps, mapDispatchToProps)(Index);