import React from 'react';
import { Link } from 'react-router-dom'


class User extends React.Component{
  render(){
    return (
      <div><Link to="/">toHome</Link></div>
    )
  }
}

export default User;