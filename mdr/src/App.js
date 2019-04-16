import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/header/NavBar';
import Home from './components/home/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className='App'>
          <NavBar />  
          <Route exact path='/' component={Home}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;