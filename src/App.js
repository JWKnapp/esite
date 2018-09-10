import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="main_contain">
        <div>
          <Header />
        </div>
        <Shop />
      </div>
    );
  }
}

export default App;
