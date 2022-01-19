import React, {Component} from "react";
import PropTypes from "prop-types";
import "./App.css"
// const Student = (props) => {
//     return(
//         <div>
//             <h1>Hello, <span>{props.name}</span> </h1>
//             <h1>Your Roll: {props.roll}</h1>
//         </div>
//     );
// }


class Student extends Component{
    render(){
        return(
            <div>
                <h1>Hello, <span>{this.props.name}</span> </h1>
                <h1>Your Roll: {this.props.roll}</h1>
            </div> 
        );
    }
}
Student.propTypes = {
    name : PropTypes.string.isRequired
};
Student.defaultProps = {
    name : "Anonymous User"
};

export default Student;