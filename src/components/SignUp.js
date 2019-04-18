import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../actions";
import { Link } from 'react-router-dom';
import '../App.css';


class SignUp extends Component {
    state = {
        userInfo: {
          username: "",
          password: ""
        }
    };
    
    changeHandler = event => {
        event.preventDefault();
        this.setState({
            userInfo: {
            ...this.state.userInfo,
            [event.target.name]: event.target.value
            }
        });
    };
    
    submitDataHandler = event => {
        event.preventDefault();
        this.props.signUp(this.state.userInfo).then(() => this.props.history.push('/') )
    };

    render () {
        return (
            <div className="form-wrap">
            <h1>Welcome to R.ticle!</h1>
            <form onSubmit={this.submitDataHandler}>
              <div className="sign-header">
                <h3 className='cat-head'>Register</h3>
                <p>Sign up below to access your new account!</p>
              </div>
              <label>Username</label>
              <input
                id="username"
                type="text"
                name="username"
                onChange={this.changeHandler}
                value={this.state.userInfo.username}
                className='in user'
                placeholder="Username"
              />
              <label>Password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={this.state.userInfo.password}
                onChange={this.changeHandler}
                className='in pass'
                placeholder="Password"
              />
              <button onSubmit={this.submitDataHandler} className='actButton'>Sign Up! </button>
              <p>
                 Already have an account? 
                <br></br>
                <Link to="/sign-in">Log In Here.</Link>
              </p>
            </form>
            <div />
          </div>
        )
    }
}

export default connect(
    null,
    { signUp }
)(SignUp);