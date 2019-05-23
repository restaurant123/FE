import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { Popover } from '@material-ui/core';
import { connect } from 'react-redux';
import { toggleSignedIn } from '../actions';


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
          this.props.toggleSignedIn();
          alert('Successfully Signed Up! You will now be Logged In');
          this.props.history.push('/');
        })
        .catch(err => {
          console.log(err);
        })
    }
  render() {
    return (
      <div className='login'>
        <form className='loginForm' onSubmit={this.submitDataHandler}>
            <h2 className='logo'>Restaurant Passport</h2>
            <input className='loginInput' name="name" type='name' placeholder='Name' onChange={this.changeHandler} required />
            <input className='loginInput' name="email" value={this.state.userInfo.email} type='text' placeholder='Email' onChange={this.changeHandler} required />
            <input className='loginInput' name="password" value={this.state.userInfo.password} type='password' placeholder='Password' onChange={this.changeHandler} required />
            <input className='loginInput' name="address" type='address' placeholder='Address' onChange={this.changeHandler} required />
            <input className='loginInput' name="city" type='city' placeholder='City' onChange={this.changeHandler} required />
            <input className='loginInput' name="state" type='state' placeholder='State' onChange={this.changeHandler} required />
            <input className='loginInput' name="zipCode" type='zipCode' placeholder='zipCode' onChange={this.changeHandler} required />
            <button className='loginBtn'>Sign Up</button>
            <br/>
            <p className='p'>Already Have an Account?</p>
            <Link to="/signin">
              <p className='signUP'>Log In</p>
            </Link>
        </form>
      </div>
    )
  }
}

const SignUpRouter = withRouter(SignUp);
export default connect(null, { toggleSignedIn })(SignUpRouter);