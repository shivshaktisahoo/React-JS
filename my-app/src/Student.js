import React, {Component} from "react";

// Without props 
// const Student = () => {
//     return <h1>Hello Shiv</h1>;
// }

// With props
// const Student = props => <h1>Hello {props.name}</h1>;


class Student extends Component{
    render(){
        return <h1>Hello {this.props.name}</h1>;
    }
}




export default Student;