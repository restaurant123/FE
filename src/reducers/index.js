import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, GET_POST, GET_POST_SUCCESS, GET_POST_FAILURE, ADD_POST, ADD_POST_SUCCESS, ADD_POST_FAILURE, DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, EDIT_POST, EDIT_POST_SUCCESS, EDIT_POST_FAILURE, SEARCH } from '../actions';

const initialState = {
  posts: [],
  post: {},
  fetchingPosts: false,
  fetchingPost: false,
  addingPost: false,
  updatingPost: false,
  deletingPost: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
    return {
      ...state,
      fetchingPosts: true,
      error: null
    }
    case GET_POSTS_SUCCESS:
    return {
      ...state,
      posts: action.payload,
      fetchingPosts: false
    }
    case GET_POSTS_FAILURE:
    return {
      ...state,
      fetchingPosts: false,
      error: action.payload
    }
    case GET_POST:
    return {
      ...state,
      fetchingPost: true,
      error: null
    }
    case GET_POST_SUCCESS:
    return {
      ...state,
      post: {...action.payload},
      fetchingPost: false
    }
    case GET_POST_FAILURE:
    return {
      ...state,
      fetchingPost: false,
      error: action.payload
    }
    case ADD_POST:
    return {
      ...state,
      addingPost: true,
      error: null
    }
    case ADD_POST_SUCCESS:
    return {
      ...state,
      addingPost: false,
      posts: [...state.posts, action.payload]
    }
    case ADD_POST_FAILURE:
    return {
      ...state,
      addingPost: false,
      error: action.payload
    }
    case DELETE_POST:
    return {
      ...state,
      deletingPost: true,
      error: null
    }
    case DELETE_POST_SUCCESS:
    return {
      ...state,
      deletingPost: false,
      post: null
    }
    case DELETE_POST_FAILURE:
    return {
      ...state,
      deletingPost: false,
      error: action.payload
    }
    case EDIT_POST:
    return {
      ...state,
      editingPost: true,
      error: null
    }
    case EDIT_POST_SUCCESS:
    return {
      ...state,
      editingPost: false,
      post: {...action.payload}
    }
    case EDIT_POST_FAILURE:
    return {
      ...state,
      editingPost: false,
      error: action.payload
    }
    case SEARCH:
    return {
      ...state,
      posts: state.posts.filter(post => post.includes(action.payload))
    }
    default:
      return state;
  }
};

export default reducer;