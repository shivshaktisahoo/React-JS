import React, { Component } from 'react';
import Student from './Student';

// Mounting Phase - lifecycle methods
export default class App extends Component {
  constructor(props){
      super(props);
      console.log("APP - Constructor called");
      console.log(props);
      this.state = {
          roll : "102"
      }
  }  

  static getDerivedStateFromProps(props, state){
      console.log("App - get Derived State From Props");
      console.log(props, state);
      return null;
  }

  componentDidMount(){
    //   uses - Get Data from server and set the data from state 
      console.log("App - componentDidMount - Mounted");
  }

  render() {
    console.log("App - Rendered")
    return (
        <div>
            <Student name="Shiv Shakti" />
        </div>
    );
  }
}
