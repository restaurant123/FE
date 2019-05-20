import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBar from "./components/AppBar";
// import PostPage from "./components/PostPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <Route exact path="/"/>
          <Route path ="/reslist" />
          <Route path ={`/reslist/postpage:id`} />
          <Route path={`/profilepage/:id`} />
          <AppBar />
          {/* <PostPage /> */}
        </div>
      </Router>
   );
 }
}
  

export default App;
