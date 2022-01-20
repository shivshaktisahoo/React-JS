import React, { Component } from 'react';

export default class Student extends Component {
  componentDidMount(){
      console.log("Student Mounted");
  }  
  render() {
    console.log("Student Rendered");
    return <h1>Hello Student Component</h1>;
  }
}
