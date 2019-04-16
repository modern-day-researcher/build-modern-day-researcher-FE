import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions';
import '../App.css';


class LoginForm extends Component {
  state = {
    credentials: {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <div className="form-wrap">
        <form>
          <div className="sign-header">
            <h3 className='cat-head'>Sign In</h3>
            <p>
              Sign in below to access your dashboard. Don't have an account yet?{' '}
              <Link to="/">Create one here.</Link>
            </p>
          </div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            className='in user'
            placeholder="Email Address"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            className='in pass'
            placeholder="Password"
          />
          <button >Log In</button>
        </form>
        <div />
      </div>
    )
  }
}
export default LoginForm;