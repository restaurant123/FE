import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import PrimarySearchAppBar from './PrimarySearchAppBar';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1762,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});

class AdvancedGridList extends Component {
   
  componentDidMount() {
    if (this.props.posts.length === 0) {
      this.props.getPosts();  
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.deletingPost && !this.props.deletingPost && !this.props.error) {
      this.props.getPosts();
    }
  }

  render() {
    const { classes, posts } = this.props;

    return (
      <>
      <div className={classes.root}>
        <GridList cellHeight={300} spacing={1} className={classes.gridList}>
        {posts.map(post => (
          <GridListTile key={post.id} cols={.5} rows={1}>
            <img src={post.image_url} alt={post.name} />
            <Link to={`/postpages/${post.id}`}>
              <GridListTileBar
                title={post.name}
                titlePosition="top"
                actionIcon={
                  <IconButton className={classes.icon}>
                  <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
              />
            </Link>
          </GridListTile>
          ))}
        </GridList>
      </div>
      </>
    );
  }
}

const styledComponent = withStyles(styles)(AdvancedGridList);

const mapStateToProps = state => ({
  posts: state.posts,
  fetchingPosts: state.fetchingPosts,
  error: state.error,
  deletingPost: state.deletingPost
})

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getPosts })(styledComponent)