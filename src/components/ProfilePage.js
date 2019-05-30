import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import MediaCard from './MediaCard';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { getProfile, editProfile, getPosts, filterProfile } from '../actions';
import { connect } from 'react-redux';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      user: {
        email: null,
        id: this.props.match.params.id,
        profile: {
          name: "",
          city: "",
          state: "",
          zipCode: "",
        }
      }
    }
  }

  componentDidMount() {
    this.props.getProfile(this.state.user.id);
    this.props.getPosts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.fetchingProfile && !this.props.fetchingProfile && !this.props.error) {
      this.setState({
        user: {
          ...this.state.user,
          email: this.props.currentProfile.email,
          profile: {
            ...this.props.currentProfile.profile
          }
        }
      })
    }
    if (prevProps.fetchingPosts && !this.props.fetchingPosts && !this.props.error) {
      this.props.filterProfile();
    }
  }

  editToggler = e => {
    this.setState({ isEditing: !this.state.isEditing })
  }

  editHandler = e => {
    e.preventDefault();
    this.setState({
      user: {
        ...this.state.user,
        profile: {
          ...this.state.user.profile,
          [e.target.name]:e.target.value
        }
      }
    })
  }

  editProfile = (e, profile) => {
    e.preventDefault();
    this.props.editProfile(profile)
    this.editToggler();
  }

  render() {
    const { classes } = this.props;

    if (this.props.fetchingPosts) {
      return (
        <div className="loading">
          <Loader type="Oval" color="#00bfff" height="150" width="100" />
        </div>
      )
    }

    return (
      <div className='profileContainer'>
        <div className='profilePageHeader' >
            <h2>{`${this.state.user.profile.name}`}s Profile Page</h2>
            <img />
        </div>
        {/* onSubmit={this.editSubmitter} */}
        <form className='profilePage'  onSubmit={e => this.editProfile(e, this.state.user)} >
            {/* <input placeholder='Username/email' className='inputField' /> */}
            {this.state.isEditing ? <TextField onChange={this.editHandler} name='name' placeholder='Name' className='inputField' /> : <p>{`${this.state.user.profile.name}`}</p>}
            <br />
            {this.state.isEditing ? <TextField onChange={this.editHandler} name='city' placeholder='City' className='inputField' /> : <p>{this.state.user.profile.city}</p>}
            <br />
            {this.state.isEditing ? <TextField onChange={this.editHandler} name='state' placeholder='State' className='inputField' /> : <p>{this.state.user.profile.state}</p>}
            <br />
            {this.state.isEditing ? <TextField onChange={this.editHandler} name='zipCode' placeholder='ZIP code' className='inputField' /> : <p>{this.state.user.profile.zipCode}</p>}
            <br />
            {this.state.isEditing && <Button onClick={e => this.editProfile(e, this.state.user)} type="submit" variant="contained" className={classes.edit} >Update Info</Button>} {!this.state.isEditing && <Button type="submit" onClick={this.editToggler} variant="contained" className={classes.edit}>Edit Info</Button> }
        </form>

        {/* /////////////User's Posts */}
        <div className='profilePostHeader'>
            <h2 className='userNameTitle'>{`${this.state.user.profile.name}`}s Posts</h2>
              <Fab aria-label="Add" size="large" color="primary" className={classes.add} component={Link} to="/postform">
                <AddIcon />
              </Fab>
        </div>

        <div className='profilePosts' >
            {this.props.profilePosts.map(post => <MediaCard key={post.id} title={post.name} description={post.description} image={post.image_url} id={post.id} />)}
        </div>
       </div>
    )
  }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  add: {
    margin: theme.spacing.unit,
    color: 'white',
    '&:hover': {
      backgroundColor: fade('#0087ea', .75),
    },
  },
  edit: {
    margin: theme.spacing.unit,
    backgroundColor: '#ffa500',
    color: 'white',
    '&:hover': {
      backgroundColor: fade('#ffa500', .75),
    },
  },
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

const mapStateToProps = state => ({
  currentProfile: state.currentProfile,
  error: state.error,
  fetchingProfile: state.fetchingProfile,
  profilePosts: state.profilePosts,
  fetchingPosts: state.fetchingPosts
})

const ProfilePageStyles = withStyles(styles)(ProfilePage);
export default connect(mapStateToProps, { getProfile, editProfile, getPosts, filterProfile })(ProfilePageStyles);