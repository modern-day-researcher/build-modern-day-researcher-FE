import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import NavBar from './components/header/NavBar';
import Home from './components/home/Home';
import All from './components/All';
import LoginForm from './components/SignIn';
import SignUp from './components/SignUp';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className='App'>
          <NavBar />  
          <PrivateRoute exact path='/' component={Home}/>
          <PrivateRoute path='/all' component={All} />
          <Route path='/sign-in' component={LoginForm} />
          <Route path='/sign-up' component={SignUp} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;