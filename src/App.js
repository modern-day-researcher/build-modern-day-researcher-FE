import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import NavBar from './components/header/NavBar';
import Home from './components/home/Home';
import All from './components/All';
import URL from './components/URL';
import LoginForm from './components/SignIn';
import SignUp from './components/SignUp';
import Footer from './components/header/Footer';

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
          <PrivateRoute path='/politics' component={URL} />
          <PrivateRoute path='/animals' component={URL} />
          <PrivateRoute path='/tech'  component={URL} />
          <PrivateRoute path='/health' component={URL} />
          <PrivateRoute path='/business' component={URL} />
          <PrivateRoute path='/food' component={URL} />
          <PrivateRoute path='/art' component={URL} />
          <PrivateRoute path='/sports' component={URL} />
          <PrivateRoute path='/videos' component={URL} />
          <PrivateRoute path='/entertainment' component={URL} />
          <Route path='/sign-in' component={LoginForm} />
          <Route path='/sign-up' component={SignUp} />
          <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;