import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={data:""
  }
  this.displayMessage=this.displayMessage.bind(this)
  
  };
  displayMessage(){
    var today=new Date()
    var curHr=today.getHours()
    if(curHr<12){
    this.setState({data:"Good Morning Kavya"})}
    else if(curHr<18){
      this.setState({data:"Good Afternoon Kavya"})
    }
    else{
      this.setState({data:"Good Evening Kavya"})
    }
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.displayMessage}>Greetings</button>
        <h1>{this.state.data}</h1>
      </div>
    );
  }
}

export default App;
