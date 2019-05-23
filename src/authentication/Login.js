import React, { Component } from 'react'
import './login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            isSignedUp: false,
        }
    }

    changeUserNameHandler = e => this.setState({ username: e.target.value });
    changePasswordHandler = e => this.setState({ password: e.target.value });
    submitDataHandler = e => {
        e.preventDefault();
      
        const userInfo = {
          "email": this.state.username,
          "password": this.state.password
        }
        axios.post('https://restaurant-passport2019.herokuapp.com/users/login', userInfo)
        .then(res => {
          console.log(res);
          localStorage.setItem('jwt', res.data.token);
          // window.location.reload()
          this.props.history.push('/')
        })
        .catch(err => {
          console.log(err);
        })
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
            <input className='loginInput' type='text' placeholder='Email' onChange={this.changeUserNameHandler} required />
            <input className='loginInput' type='password' placeholder='Password' onChange={this.changePasswordHandler} required />
            <button className='loginBtn'>Log In</button>
            <br/>
            <p className='p'>Dont Have an Account?</p>
            <p className='signUP' onClick={this.toggler} >Sign Up</p>
        </form>
    </div> : <SignUp toggler={this.toggler} /> }

  </>
    )
  }
}

export default Login;
