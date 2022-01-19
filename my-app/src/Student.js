import React, { Component } from "react";

// Functional Component
// const Student = props =>{
//     return <h1>Hello Shiv {props.children}</h1>
// };

class Student extends Component {
    render(){
        return <h1>Hello Shiv {this.props.children}</h1>;
    }
}

export default Student;