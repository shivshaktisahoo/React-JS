import React, { Component } from 'react';
import "./User.css"

export default class User extends Component {
  render() {
    // return <h2 className='txt'>Hello Users</h2>;


    return <h2 className={this.props.usercolor}>Hello Users</h2>;
  }
}
