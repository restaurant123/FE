import React, { Component } from 'react'
import './login.css';
import { connect } from 'react-redux';
import { toggleSignedIn } from '../actions';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';


class Login extends Component {
  state = {
    userInfo: {
      "email": "",
      "password": ""
    }
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value
      }
    })
  }

  submitDataHandler = (e, userInfo) => {
    e.preventDefault();
    this.props.toggleSignedIn(userInfo)
    this.props.history.push('/');
  }

render() {
  return (
    <div className='login'>
      <form className='loginForm' onSubmit={e => this.submitDataHandler(e, this.state.userInfo)}>
          <h2 className='logo'>Restaurant Passport</h2>
          <TextField className='loginInput' name="email" type='text' placeholder='Email' onChange={this.changeHandler} value={this.state.userInfo.email} required />
          <TextField className='loginInput' name="password" type='password' placeholder='Password' value={this.state.userInfo.password} onChange={this.changeHandler} required />
          <br />
          <button className='loginBtn'>Log In</button>
          <br/>
          <p className='p'>Dont Have an Account?</p>
          <br />
          <Link to="/signup">
            <p className='signUP'>Sign Up</p>
          </Link>
        </form>
      </div>
  )
}
}

const styles = theme => ({
container: {
  display: 'flex',
  flexWrap: 'wrap',
},
textField: {
  marginLeft: theme.spacing.unit,
  marginRight: theme.spacing.unit,
},
dense: {
  marginTop: 16,
},
menu: {
  width: 200,
},
 button: {
  margin: theme.spacing.unit,
},
edit: {
  margin: theme.spacing.unit,
  backgroundColor: '#ffa500',
  color: 'white',
  '&:hover': {
    backgroundColor: fade('#ffa500', .75),
  },
},
});

const LoginFormStyles = withStyles(styles)(Login);
export default connect(null, { toggleSignedIn })(LoginFormStyles);