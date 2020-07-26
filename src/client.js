import React, { Component } from 'react';
import './App.css';

class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[0, "", "", "", "", ""]
    };
    this.Change = this.Change.bind(this);
  } 

  Change(e) {
    let a = this.state.data;
    a[e.target.id] = e.target.value;
    this.setState({
      data: a
    });
  };

  render() {
    return (
      <div className="App-client">
      </div>
    );
  }
}

export default Client;