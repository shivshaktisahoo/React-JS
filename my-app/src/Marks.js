import React, { Component } from 'react';

export default class Marks extends Component {
   constructor(props){
       super(props);
       this.state = {
           mroll : this.props.roll
       }
   }   

   static getDerivedStateFromProps(props, state){
       console.log("Marks - GDSFP");
       console.log(props, state);
       if(props.roll !== state.mroll){
           return {mroll : props.roll};
       }
       return null;
   }

   shouldComponentUpdate(nextProps, nextState){
       if(this.state.mroll < 107){
           console.log("Mark- Should Component Update");
           console.log(nextProps, nextState);
           return true;
       }
       console.log(nextProps, nextState);
       return false;
   }

   getSnapshotBeforeUpdate(prevProps, prevState){
       console.log("Marks - GetSnapshotBeforeUpdate - Its runs Before update");
       console.log(prevProps, prevState);
       return 50;
   }

   componentDidUpdate(prevProps, prevState, snapshot){
       console.log("Marks - ComponentDidUpdate -It runs after update");
       console.log(prevProps, prevState, snapshot);
   }

  render() {
    console.log("Marks - Rendered");
    return (
        <div>
            <h1>Roll no. : {this.state.mroll}</h1>
        </div>
    );
  }
}
