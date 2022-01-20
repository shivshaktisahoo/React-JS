// import React, { Component } from 'react';
import React from 'react';


// Class Component
// export default class Student extends Component{
//     state = {
//         name : "Shiv",
//         roll : this.props.roll,
//     }
//     handleClick = () => {
//         console.log("You clicked me !!!!", this);
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Hello Event {this.state.name} & {this.state.roll}</h1>
//                 <button onClick={this.handleClick}>Click Me</button>
//             </div>
//         )
//     }
// }

// Function Component
function Student(props) {
    const handleClick = (e) => {
        e.preventDefault();
        console.log("You Clicked me !!!!");
    };

    return(
        <div>
            <h1>Hello Event {props.roll}</h1>
            <a href="https://github.com/shivshaktisahoo" onClick={handleClick}>Click Me</a>
            {/* <button onClick={handleClick}>Click me</button> */}
        </div>
    );
}

export default Student;