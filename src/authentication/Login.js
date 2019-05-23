import React, { Component } from 'react'
import './login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
import { connect } from 'react-redux';
import { toggleSignedIn } from '../actions';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
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
          localStorage.setItem('userID', res.data);
          // window.location.reload()
          this.props.toggleSignedIn();
          this.props.history.push('/');
        })
        .catch(err => {
          console.log(err);
        })
    }
   
  render() {
    return (
      <>
      <div className='login'>
        <form className='loginForm' onSubmit={this.submitDataHandler}>
            <h2 className='logo'>Restaurant Passport</h2>
            <input className='loginInput' type='text' placeholder='Email' onChange={this.changeUserNameHandler} value={this.state.userInfo.email} required />
            <input className='loginInput' type='password' placeholder='Password' value={this.state.userInfo.password} onChange={this.changePasswordHandler} required />
            <button className='loginBtn'>Log In</button>
            <br/>
            <p className='p'>Dont Have an Account?</p>
              <Link to="/signup">
              <p className='signUP'>Sign Up</p>
             </Link>
        </form>
   </div>

  </>
    )
  }
}

export default connect(null, { toggleSignedIn })(Login);
