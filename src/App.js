import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import PostPage from './components/postpage/PostPage';
import CatalogGrid from './components/CatalogGrid';
import authenticate from './authentication/authenticate';
import SignUp from './authentication/SignUp';
import Login from './authentication/Login';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';


class App extends Component {
  render() {
    return (
        <div className="App">
          <PrimarySearchAppBar />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path='/login' render={props => <Login {...props} />} />
          <Route exact path="/" component={CatalogGrid} />
          <Route path="/postpages/:id" component={PostPage} />
        </div>
    );
  }
}

export default authenticate(App);
