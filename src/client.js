import React, { Component } from 'react';
import './App.css';

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[0, "", "", "", "", ""]
    };
  } 


  render() {
    return (
      <div className="App-client">
      </div>
    );
  }
}

export default Client;