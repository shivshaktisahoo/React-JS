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
  render() {
    const txtc = {
      color : 'blue',
    };
    const txts = {
      fontSize : "80px"
    };
    return (
      <div>
        <h1 style={{...txtc, ...txts}}>Hello App</h1>
      </div>
    );
  }


}
