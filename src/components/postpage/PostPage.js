import React, { Component } from 'react';
import './PostPage.css';
import { connect } from 'react-redux';
import { getPost, deletePost } from '../../actions';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class PostPage extends Component {
  state = {
    post: {
      name: '',
      stars:'',
      address: '',
      city: '',
      state: '',
      image_url: '',
      category: '',
      description:'',
      visited:'',
    
    }
  }

  componentDidMount() {
    if (this.props.post.id !== this.props.match.params.id) {
      this.props.getPost(this.props.match.params.id);
      console.log(this.props.getPost)  
    }
    else {
      this.setState({ post: {
        name: this.props.post.name,
        city: this.props.post.city,
        address: this.props.post.address,
        description: this.props.post.description,
        visited: this.props.post.visited,
        image_url: this.props.post.image_url,
        location: `${this.props.post.city}, ${this.props.post.state} ${this.props.post.zipCode}`
      }})
    }
  }

  deletePost = id => {
    this.props.deletePost(id);
    this.props.history.push('/')
  }

  componentDidUpdate(prevProps) {
    if (prevProps.post !== this.props.post) {
      const post = this.props.post;
      this.setState({ post: {
        name: post.name,
        city: post.city,
        address: post.address,
        description: post.description,
        visited: post.visited,
        image_url: post.image_url,
        location: `${post.city}, ${post.state} ${post.zipCode}`
      } })
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="postpage-container">
        <header className="postpage-header">
          <div className="title-container">
            <h2>{this.state.post.name}</h2>
            <Fab color="secondary" aria-label="Add" size="large" className={classes.fab} component={Link} to="/postform">
              <AddIcon />
            </Fab>
            <Fab aria-label="Edit" color='primary' className={classes.fab} component={Link} to="/editform">
              <EditIcon></EditIcon>
            </Fab>
            <Fab aria-label="Delete" color="inherit" className={classes.fab} onClick={() => this.deletePost(this.props.match.params.id)}>
              <DeleteIcon />
            </Fab>
          </div>
          {/* <h3>{this.state.post.city} </h3> */}
          {/* <h3>{this.state.post.visited}</h3> */}
          <h4>{this.state.post.location}</h4>
        </header>
        <article className="postpage-content">
          <img src={this.state.post.image_url} alt={this.state.post.name} />
          <h4>Visited: {this.state.post.visited}</h4>
          <br/>
          <p>{this.state.post.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </article>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  post: state.post,
  fetchingPost: state.fetchingPost,
  error: state.error
})

const PostPageStyles = withStyles(styles)(PostPage);
export default connect(mapStateToProps, { getPost, deletePost })(PostPageStyles);