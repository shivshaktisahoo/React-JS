import React, { Component } from 'react';

export default class App extends Component {
  render() {
    const arr = [10, 20, 30 ,40];
    // const newArr = arr.map((num) => {
    //   console.log("Num = ", num);
    //   return <li>{num * 2}</li>;
    // });
    // console.log("OldArray = ", arr);
    // console.log("NewArray = ", newArr);

    // return (
    //   <ul>{newArr}</ul>
    // );


    return(
      <ul>
        {
          arr.map((num)=> {
            return <li>{num * 2}</li>
          })
        }
      </ul>
    )
  }
}
