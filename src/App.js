import React, { Component } from 'react';
import './App.css';
import IntroView from './components/intro/IntroView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IntroView/>
      </div>
    );
  }
}

export default App;
