import React, { Component } from 'react';
import Guest from './Guest';
import User from './User';

export default class App extends Component {
  state = {
    isLoggedIn : false
  }

  clickLogin =()=>{
    this.setState({isLoggedIn:true})
  }
  clickLogout =()=>{
    this.setState({isLoggedIn:false})
  }

  // render() {
  //   const isLoggedIn = this.state.isLoggedIn
  //   if (isLoggedIn){
  //     return <User clickData={this.clickLogout}/>;
  //   } 
  //   else{
  //     return <Guest clickData={this.clickLogin}/>;
  //   }
  // }


  // IIFE - write any JS code inside it
  render() {
    const isLoggedIn = this.state.isLoggedIn
    return(
      <div>
        {( () => {
            if (isLoggedIn){
              return <User clickData={this.clickLogout}/>;
            } 
            else{
              return <Guest clickData={this.clickLogin}/>;
            }
          } )()
        }
      </div>
    );
  }
}
