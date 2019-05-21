import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
      }

    changeHandler = e => this.setState({ [e.target.name]: e.target.value });
    submitDataHandler = e => {
        const name = this.state.name;
        const password = this.state.password;
        const userInfo = {
          "email": this.state.email,
          "password": this.state.password
        }
        axios.post('https://restaurant-passport2019.herokuapp.com/users/register', userInfo)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    }
  render() {
    return (
      <div className='login'>
        <form className='loginForm'>
            <h2 className='logo'>Resaurant Passport</h2>
            <input className='loginInput' type='text' placeholder='Name' onChange={this.changeHandler} required />
            <input className='loginInput' type='text' placeholder='Email' onChange={this.changeHandler} required />
            <input className='loginInput' type='password' placeholder='Password' onChange={this.changeHandler} required />
            <input className='loginInput' type='text' placeholder='Address' onChange={this.changeHandler} required />
            <input className='loginInput' type='text' placeholder='City' onChange={this.changeHandler} required />
            <input className='loginInput' type='text' placeholder='State' onChange={this.changeHandler} required />
            <input className='loginInput' type='text' placeholder='Zipcode' onChange={this.changeHandler} required />
            <button className='loginBtn'  onClick={this.submitDataHandler}>Sign Up</button>
            <br/>
            <p>Already Have an Account?</p>
            <p className='signUP' onClick={this.props.toggler}>Log In</p>
        </form>
      </div>
    )
  }
}
