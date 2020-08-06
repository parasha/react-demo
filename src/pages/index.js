import React from 'react';
import { Link } from 'react-router-dom'


class Index extends React.Component {
  render() {
    return (
      <div>
        index page
        <div><Link to="/home">toHome</Link></div>
        <div><Link to="/user">toUser</Link></div>
      </div>
    )
  }
}

export default Index;