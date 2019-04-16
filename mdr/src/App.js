import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/header/NavBar';
import Home from './components/home/Home';
import All from './components/All';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className='App'>
          <NavBar />  
          <Route exact path='/' component={Home}/>
          <Route path='/all' render={() => <All />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;