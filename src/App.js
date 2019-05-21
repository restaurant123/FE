import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import PostPage from './components/postpage/PostPage';
import CatalogGrid from './components/CatalogGrid';
import authenticate from './authentication/authenticate';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <PrimarySearchAppBar />
          <Route exact path="/" component={CatalogGrid} />
          <Route path="/postpage/:id" component={PostPage} />
          <Route path="/profile-page/:id" />
        </div>
      </Router>
    );
  }
}

export default authenticate(App);
