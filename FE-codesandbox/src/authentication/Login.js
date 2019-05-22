import React, { Component } from 'react'
import './login.css';


export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    changeUserNameHandler = e => this.setState({ email: e.target.value });
    changePasswordHandler = e => this.setState({ password: e.target.value });
    submitDataHandler = () => {
        const email = this.state.email;
        const password = this.state.password;
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    }
  render() {
    return (
      <div className='login'>
        <form className='loginForm'>
            <h2 className='logo'>Restaurant Passport </h2>
            <input className='loginInput' type='text' placeholder='Email' onChange={this.changeUserNameHandler} required />
            <input className='loginInput' type='password' placeholder='Password' onChange={this.changePasswordHandler} required />
            <button className='loginBtn' onClick={this.submitDataHandler}>Log In</button>
            <br/>
            <a href='#' className='signUP'>Sign Up</a>
        </form>
    </div>
    )
  }
}
