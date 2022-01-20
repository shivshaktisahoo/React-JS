import React, { Component } from 'react';
import Marks from './Marks';

export default class Student extends Component {
  constructor(){
      super();
      this.state = {
          roll : 101
      }
  }  

    handlerClick = () => {
        console.log("Button Clicked");
        // this.setState({roll:102});
        this.setState({roll : this.state.roll + 2});
    }

  render() {
      console.log("Student - Rendered");
        return(
            <div>
                {/* <h1>Stu roll - {this.state.roll}</h1> */}
                <Marks roll={this.state.roll}/>
                <button onClick={this.handlerClick}>Click Me</button>
            </div>
        );
    }
}
