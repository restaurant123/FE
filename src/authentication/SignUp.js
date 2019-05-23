import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

class SignUp extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        address: "",
        city: "",
        state: "",
        zipCode: ``
      }

    changeHandler = e => this.setState({ [e.target.name]: e.target.value });
    submitDataHandler = e => {
        e.preventDefault();
        const username = this.state.name;
        const password = this.state.password;
        const userInfo = {
          "name": this.state.name,
          "email": this.state.email,
          "password": this.state.password,
          "address": this.state.address,
          "city": this.state.city,
          "state": this.state.state,
          "zipCode": this.state.zipCode
        }
        axios.post('https://restaurant-passport2019.herokuapp.com/users/register', userInfo)
        .then(res => {
          console.log(res);
          localStorage.setItem('jwt', res.data.token)
          window.location.reload()
        })
        .catch(err => {
          console.log(err);
        })
    }
  render() {
    return (
      <div className='login'>
        <form className='loginForm'>
            <h2 className='logo'>Restaurant Passport</h2>
            <input className='loginInput' name="name" type='name' placeholder='Name' onChange={this.changeHandler} required />
            <input className='loginInput' name="email" type='text' placeholder='Email' onChange={this.changeHandler} required />
            <input className='loginInput' name="password" type='password' placeholder='Password' onChange={this.changeHandler} required />
            <input className='loginInput' name="address" type='address' placeholder='Address' onChange={this.changeHandler} required />
            <input className='loginInput' name="city" type='city' placeholder='City' onChange={this.changeHandler} required />
            <input className='loginInput' name="state" type='state' placeholder='State' onChange={this.changeHandler} required />
            <input className='loginInput' name="zipCode" type='zipCode' placeholder='zipCode' onChange={this.changeHandler} required />
            <button className='loginBtn'  onClick={this.submitDataHandler}>Sign Up</button>
            <br/>
            <p className='p'>Already Have an Account?</p>
            <p className='signUP' onClick={this.props.toggler}>Log In</p>
        </form>
      </div>
    )
  }
}

export default withRouter(SignUp);