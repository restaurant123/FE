import React, { Component } from 'react';
import './PostPage.css';

class PostPage extends Component {
  render() {
    return (
      <div className="postpage-container">
        <header className="postpage-header">
          <h2>Name of Item</h2>
          <h3>Price of Item</h3>
          <h4>lorem</h4>
        </header>
      </div>
    )
  }
}

export default PostPage;