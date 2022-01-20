import React, { Component } from 'react';


// Class Component
export default class Student extends Component{
    constructor(props){
        super(props)
        this.state = {
            name : "Shiv",
            roll : this.props.roll,
        }
    }
    // 1st Form
    // handleClick = () => {
    //    this.setState({name : "Ravi", roll : "105"});
    // }

    // 2nd form
    handleClick = () => {
       this.setState((state, props) => {
           console.log(state);
           console.log(state.name, state.roll);
           console.log(props);
           console.log(props.roll);
           state.name = "Alok"
           state.roll = "105"
           return state
       });
    }
    render(){
        return(
            <div>
                <h1>Hello, {this.state.name} & your Roll no. {this.state.roll}</h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

