import React, { Component } from 'react';

export default class App extends Component {
  state = {
    users : [
      {id : 101, name : "Shiv", password : "qw12q34"},
      {id : 102, name : "Jack", password : "q32w12q34"},
      {id : 103, name : "Max", password : "rerqw12q34"}
    ],
    isLoggedIn : false
  }
  render() {
    const newUsers = this.state.users.map((user)=>{
      // console.log(user);
      return <h1>Id : {user.id}  Name : {user.name}  Password : {user.password} </h1> 
    });
    return (
      <div>
        {newUsers}
      </div>
    );
  }
}
