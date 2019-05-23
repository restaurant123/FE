import React, { Component } from 'react';
import MediaCard from './MediaCard';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { editProfile } from '../actions';

class ProfilePage extends Component {
constructor() {
  super();
  this.state = {
    profile: {
      isEditing: false,
      name: 'Name Here',
      email: 'Email here',
      password: 'Password here',
      city: 'City here'
    }
  }
}

  editToggler = e => {
    this.setState({ isEditing: !this.state.isEditing })
  }
  editHandler = e => {
    this.setState({ [e.target.name] : e.target.value })
  }
editSubmitter = e => {
  e.preventDefault();
  this.setState({ name: this.state.profile.name })
  this.setState({ name: this.state.profile.email })
  this.setState({ name: this.state.profile.password })
  this.setState({ name: this.state.profile.city })
}
editProfile = (e, profile) => {
  e.preventDefault();
  this.props.editProfile(profile)
}

  render() {
    return (
      <div className='profileContainer'>
        <div className='profilePageHeader' >
            <h2>*USERNAME HERE*</h2>
            <img />
        </div>
        <form className='profilePage' onSubmit={this.editSubmitter}>
          {/* <input placeholder='Username' className='inputField' /> */}
          {this.state.isEditing ? <input onChange={this.editHandler} name='name' placeholder='Name' className='inputField' /> : <p>{this.state.profile.name}</p>}
          {this.state.isEditing ? <input onChange={this.editHandler} name='email' placeholder='Email' className='inputField' /> : <p>{this.state.profile.email}</p>}
          {this.state.isEditing ? <input onChange={this.editHandler} name='password' placeholder='Password' className='inputField' /> : <p>{this.state.profile.password}</p>}
          {this.state.isEditing ? <textarea onChange={this.editHandler} name='bio' placeholder='City' className='inputField' /> : <p>{this.state.profile.city}</p>}
          <br />
          <Button type='submit' onClick={this.editToggler} variant="contained" color="secondary">{this.state.isEditing ? 'Update Info' : 'Edit Info'}</Button>
          </form>


        {/* /////////////User's Posts */}
        <h2 className='userNameTitle'>*USERNAME HERE* Posts</h2>
        <div className='profilePosts' >
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <MediaCard />
        </div>
       </div>
    )
  }
}

export default connect(null, { editProfile })(ProfilePage);