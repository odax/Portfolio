import React, { Component } from 'react';
import './App.css';
import IntroView from './components/intro/IntroView';
import MainView from './components/main/MainView';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={MainView}/>
        <Route path="/intro" component={IntroView}/>
      </div>
    );
  }
}

export default App;
