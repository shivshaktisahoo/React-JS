import React, { Component } from 'react';
import "./App.css";
import User from './User';

export default class App extends Component {
  render() {
    let style = false;

    // return (
    //   <React.Fragment>
    //     <h1 className="txt">Hello App</h1>
    //     <User/>
    //   </React.Fragment>
    // );


    return (
      <React.Fragment>
        <h1 className="txtr">Hello App</h1>
        <User usercolor={style ? "txtr" : "txtg"}/>
      </React.Fragment>
    );

  }
}
