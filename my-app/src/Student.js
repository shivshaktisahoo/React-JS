import React, { Component } from 'react';

// State used Without constructor
// export default class Student extends Component{
//         state = {
//             name : "Shiv",
//             roll : this.props.roll
//         }   
//     render(){
//         return <h1>Hello, {this.state.name} & your roll no. is {this.state.roll}</h1>;
//     }
// }

// State used Inside the constructor
export default class Student extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : "Shiv",
            roll : this.props.roll
        }
    }
    
    render(){
        return <h1>Hello, {this.state.name} & your roll no. is {this.state.roll}</h1>;
    }
}