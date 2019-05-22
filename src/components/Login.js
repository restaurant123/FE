import React from 'react'
import {loginAction} from '../actions/loginAction'
import {registeringAction} from '../actions/registeringAction'
import { connect } from 'react-redux';
import './login.css';



class Login extends React.Component {

  state = {
    signUp: {
      name: '',
      email: '',
      password: '',
      address: '',
      city: '',
      state: '',
      zipCode: ''
    },
    signIn: {
      email: '',
      password: ''
    },
  }

  handleSignUpChanges = (event) => {
    this.setState({ ...this.state, signUp: { ...this.state.signUp, [event.target.name]: event.target.value } })
  }

  handleSignUpSubmit = (event) => {
    event.preventDefault();
    this.props.registeringAction(this.state.signUp)
      .then()

  }

  handleSignInChanges = (event) => {
    this.setState({ ...this.state, signIn: { ...this.state.signIn, [event.target.name]: event.target.value } })
  }

  handleSignInSubmit = (event) => {
    event.preventDefault();
    this.props.loginAction(this.state.signIn)
      .then(() => this.props.history.push('/restaurants'))
  }

  toggler = e => {
    this.setState({ isSignedUp: !this.state.isSignedUp })
  }

  render() {
    return (
      <div className='login'>
        <form className='loginForm'>
            <h2>Sign Up</h2>
              
                <p>Name</p>
                <input className='loginInput' name="name" value={this.state.signUp.name} onChange={this.handleSignUpChanges} />
              
            
                <p>Email</p>
                <input className='loginInput' name='email' value={this.state.signUp.email} onChange={this.handleSignUpChanges} />
             
            
                <p>password</p>
                <input className='loginInput' name="password" value={this.state.signUp.password} onChange={this.handleSignUpChanges} />
              
            
                <p>Address</p>
                <input className='loginInput' name="address" value={this.state.signUp.address} onChange={this.handleSignUpChanges} />
           
            
                <p>city</p>
                <input className='loginInput' name="city" value={this.state.signUp.city} onChange={this.handleSignUpChanges} />
            
                <p>state</p>
                <input className='loginInput' name="state" value={this.state.signUp.state} onChange={this.handleSignUpChanges} />
              
                <p>zipcode</p>
                <input className='loginInput' name="zipCode" value={this.state.signUp.zipCode} onChange={this.handleSignUpChanges} />
          
                <button onClick={this.handleSignUpSubmit}>Sign Up </button>
        
          </form>

        <form className='loginForm'>
          <h2>Sign In</h2>
          
                <p>Email</p>
                <input className='loginInput' name="email" value={this.state.signIn.name} onChange={this.handleSignInChanges} />
              
                <p>Password</p>
                <input className='loginInput' name="password" value={this.state.signIn.password} onChange={this.handleSignInChanges} />
             
            <button onClick={this.handleSignInSubmit}>Sign In</button> 
          
        </form>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  id: state.login.loginId
});

export default connect(mapStateToProps, {loginAction, registeringAction})(Login)