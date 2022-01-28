import React, { Component } from 'react';
import Guest from './Guest';
import User from './User';

export default class App extends Component {
  render() {
    const isRegistered = this.props.consumer;
    if (isRegistered){
      return <User />;
    }
    return <Guest />;
    
  }
}
