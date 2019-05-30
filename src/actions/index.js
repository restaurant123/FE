import axios from 'axios';


  //Requests the entire post array
export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
export const getPosts = () => dispatch => {
  dispatch({ type: GET_POSTS})
  axios
  .get('https://restaurant-passport2019.herokuapp.com/restaurants')
  .then(res => {
    console.log(res);
    dispatch({ type: GET_POSTS_SUCCESS, payload: res.data })
  })
  .catch(err => {
    console.log(err)
    dispatch({ type: GET_POSTS_FAILURE, payload: err.message })
  })
}

  //Requests a specific post
export const GET_POST = "GET_POST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAILURE = "GET_POST_FAILURE";
export const getPost = id => dispatch => {
  dispatch({ type: GET_POST})
  axios
  .get(`https://restaurant-passport2019.herokuapp.com/restaurants/${id}`)
  .then(res => {
    console.log(res);
    dispatch({ type: GET_POST_SUCCESS, payload: res.data })
  })
  .catch(err => {
    console.log(err)
    dispatch({ type: GET_POST_FAILURE, payload: err.message })
  })
}

  //Add a new post
export const ADD_POST = "ADD_POST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";
export const addPost = post => dispatch => {
  dispatch({ type: ADD_POST })
  axios
  .post('https://restaurant-passport2019.herokuapp.com/restaurants/', post)
  .then(res => {
    console.log(res);
    dispatch({ type: ADD_POST_SUCCESS, payload: res.data })
  })
  .catch(err => {
    console.log(err);
    dispatch({ type: ADD_POST_FAILURE, payload: err.message})
  })
}

  //Delete a post
export const DELETE_POST = "DELETE_POST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";
export const deletePost = id => dispatch => {
  dispatch({ type: DELETE_POST })
  axios
  .delete(`https://restaurant-passport2019.herokuapp.com/restaurants/${id}`)
  .then(res => {
    console.log(res);
    dispatch({ type: DELETE_POST_SUCCESS, payload: res.data })
  })
  .catch(err => {
    console.log(err);
    dispatch({ type: DELETE_POST_FAILURE, payload: err.message})
  })
}

  //Edit a post
export const EDIT_POST = "EDIT_POST";
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
export const EDIT_POST_FAILURE = "EDIT_POST_FAILURE";
export const editPost = post => dispatch => {
  dispatch({ type: EDIT_POST })
  axios
  .put(`https://restaurant-passport2019.herokuapp.com/restaurants/${post.id}`, post)
  .then(res => {
    console.log(res);
    dispatch({ type: EDIT_POST_SUCCESS, payload: res.data })
  })
  .catch(err => {
    console.log(err);
    dispatch({ type: EDIT_POST_FAILURE, payload: err.message})
  })
}

  //get all active profiles
export const GET_PROFILE = 'GET_PROFILE';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';

export const getProfile = id => dispatch => {
    dispatch({ type: GET_PROFILE })
    axios.get(`https://restaurant-passport2019.herokuapp.com/users/${id}`)
    .then(res => {
      dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data.data })
    })
    .catch(err => {
      dispatch({ type: GET_PROFILE_FAILURE, payload: err.message })
    })
}

  //Edit profile
export const EDIT_PROFILE = 'EDIT_PROFILE';
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const EDIT_PROFILE_FAILURE = 'EDIT_PROFILE_FAILURE';

export const editProfile = profile => dispatch => {
    dispatch({ type: EDIT_PROFILE })
    axios
    .put(`https://restaurant-passport2019.herokuapp.com/users/${profile.id}`, profile)
    .then(res => {
        dispatch({ type: EDIT_PROFILE_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: EDIT_PROFILE_FAILURE, payload: err.message })
    })
}

export const SEARCH = 'SEARCH';

export const searchBar = search => {
  return { type: SEARCH, payload: search }
}

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const signUp = userInfo => dispatch => {
  dispatch({ type: SIGN_UP})
  axios.post('https://restaurant-passport2019.herokuapp.com/users/register', userInfo)
  .then(res => {
    dispatch({ type: SIGN_UP_SUCCESS, payload: res.data.token})
    localStorage.setItem('jwt', res.data.token);
    localStorage.setItem('userID', res.data.userId);
  })
  .catch(err => {
    dispatch({ type: SIGN_UP_FAILURE, payload: err.message})
  })
}

export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE'

export const toggleSignedIn = userInfo => dispatch => {
  dispatch({ type: SIGN_IN})
  axios.post('https://restaurant-passport2019.herokuapp.com/users/login', userInfo)
  .then(res => {
    dispatch({ type: SIGN_IN_SUCCESS, payload: res.data.token})
    localStorage.setItem('jwt', res.data.token);
    localStorage.setItem('userID', res.data.userId);
  })
  .catch(err => {
    dispatch({ type: SIGN_IN_FAILURE, payload: err.message})
  })
}

export const SIGNED_IN = "SIGNED_IN";
export const SIGNED_OUT = "SIGNED_OUT";

export const checkSignIn = () => {
  if (localStorage.getItem('jwt')) {
    return {type: SIGNED_IN }
  }
  return {type: SIGNED_OUT}
}

export const PROFILE_POSTS = 'PROFILE_POSTS';

export const filterProfile = () => {
  return {type: PROFILE_POSTS, payload: localStorage.getItem('userID')}
}
