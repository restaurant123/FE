import React from 'react';
// import {loginAction} from '../actions/loginAction';
// import {registeringAction} from '../actions/registeringAction';
// import { connect } from 'react-redux';
// import './login.css';
// import SignUp from './SignUp';

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
    }
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
      <>
      {this.state.isSignedUp ? <div className='login'>
        <form className='loginForm' onSubmit={this.submitDataHandler}>
            <h2 className='logo'>Restaurant Passport</h2>
            <input className='loginInput' type='email' placeholder='Email' value={this.state.signIn.name} onChange={this.handleSignInChanges} />
            <input className='loginInput' type='password' placeholder='Password' value={this.state.signIn.password} onChange={this.handleSignInChanges}  />
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

// const mapStateToProps = (state) => ({
//   id: state.login.loginId
// });

// export default connect(mapStateToProps, {loginAction, registeringAction})(Login)