import React, { Component } from 'react';
import User from './User';
import styles from "./App.module.css";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className={styles.txt}>Hello App</h1>
        <User />
      </React.Fragment>
    );

  }
}
