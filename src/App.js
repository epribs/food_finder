import React, { Component } from 'react';
import Login from './components/Login';
import UserInput from './components/UserInput';
import FiltBox from './components/FiltBox';
import Results from './components/Results';
import logo from './images/logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to FoodFinder MotherFucker!</h2>
          <h3>Hope you're hungry...</h3>
          <Login/>
          <UserInput/>
          <FiltBox/>
          <Results/>
        </div>
      </div>
    );
  }
}

export default App;
