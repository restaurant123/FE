import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import PostPage from './components/catalog/PostPage';
import Catalog from './components/Catalog';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <PrimarySearchAppBar />
          <Catalog />
        </div>
      </Router>
    );
  }
}

export default App;
