import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import PostPage from './components/postpage/PostPage';
import PrimarySearchAppBar from './components/PrimarySearchAppBar'
import CatalogGrid from './components/CatalogGrid';
import ProfilePage from './components/ProfilePage';
import authenticate from './authentication/authenticate';
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import PostForm from './components/postpage/PostForm';
import EditForm from './components/postpage/EditForm';
// import MediaCard from './components/MediaCard';


class App extends Component {
  render() {
    return (
        <div className="App">
          <PrimarySearchAppBar/>
          {/* <Route exact path="/signup" component={SignUp} /> */}
          <Route path='/signin' component={Login}/>
          <Route path='/signup' component={SignUp}/>
          {/* <Route exact path="/postpage" component={MediaCard} /> */}
          <Route exact path="/" component={CatalogGrid} />
          <Route path="/postpages/:id" component={PostPage}/>
          <Route exact path="/profile/:id" component={ProfilePage}/>
          <Route path="/postform" component={PostForm}/>
          <Route path="/editform" component={EditForm} />
        </div>
      
    );
  }
}

export default App;
