import React, { Component } from 'react'
import './login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            isSignedUp: false,
        }
    }

    changeUserNameHandler = e => this.setState({ username: e.target.value });
    changePasswordHandler = e => this.setState({ password: e.target.value });
    submitDataHandler = () => {
        const username = this.state.username;
        const password = this.state.password;
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        const userInfo = {
          "email": this.state.username,
          "password": this.state.password
        }
        axios.post('https://restaurant-passport2019.herokuapp.com/users/login', userInfo)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
        this.props.history.push('/');
    }
    toggler = e => {
      this.setState({ isSignedUp: !this.state.isSignedUp })
    }
  render() {
    return (
      <>
      {this.state.isSignedUp ? <div className='login'>
        <form className='loginForm' onSubmit={this.submitDataHandler}>
            <h2 className='logo'>Restaurant Passport</h2>
            <input className='loginInput' type='text' placeholder='Username' onChange={this.changeUserNameHandler} required />
            <input className='loginInput' type='password' placeholder='Password' onChange={this.changePasswordHandler} required />
            <button className='loginBtn'>Log In</button>
            <br/>
            <p>Dont Have an Account?</p>
            <p className='signUP' onClick={this.toggler} >Sign Up</p>
        </form>
    </div> : <SignUp toggler={this.toggler} /> }

  </>
    )
  }
}