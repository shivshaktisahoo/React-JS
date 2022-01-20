import React, { Component } from 'react';


// Class Component
export default class Student extends Component{
    // State w/o constructor or State Property
    state = {
        id : 1,
        name : "Shiv",
        roll : this.props.roll,
    }
    
    // Event handler Arrow Function
    handleClick = (id, e) => {
       console.log("id", id);
       console.log("event", e);
    }


    render(){
        return(
            <div>
                <h1>Hello, {this.state.name} & your Roll no. {this.state.roll}</h1>
                {/* <button onClick={e => { this.handleClick(this.state.id, e);}}>Delete</button> */}
                <button onClick={this.handleClick.bind(this, this.state.id)}>Delete</button>
            </div>
        );
    }
}

