import React, { Component } from 'react';

export default class App extends Component {

  // Type - 1
  // render() {
  //   const btnStyle = {
  //     color : 'blue',
  //     backgroundColor : 'orange',
  //     borderRadius : "30%",
  //     padding : "10px",
  //     cursor : "pointer",
  //     fontSize : "50px"
  //   };
  //   return (
  //     <div>
  //       <button style={btnStyle}>Button</button>
  //     </div>
  //   );
  // }

  // Type - 2(Multiple style)
  state = {
    change : false
  };
  clickHandle = () => {
    this.setState({change:true})
  }
  render() {
    const btnStyle = {
      color : "blue",
      backgroundColor : "orange"
    };
    if (this.state.change){
      btnStyle.backgroundColor = "white";
    }
    return <button onClick={this.clickHandle} style={btnStyle}>Button</button>;
  }


}
