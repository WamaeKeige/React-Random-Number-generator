import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Random Number Generator</h1>
        </header>
        <p className="App-intro">
          <Body />
        </p>
      </div>
    );
  }
}



class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 0
    };
    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber(){
   this.setState({r: Math.random()*10 })
  }

  render() {
    return (
      <div>
      <button onClick={this.getRandomNumber}> Random Number </button>
      <Numbers myNumber={this.state.r} />
      </div>
    );
  }
}


class Numbers extends Component {
  render() {
    return (
      <div>
      <br />
      {this.props.myNumber}
      </div>
    );
  }
}


export default App;
