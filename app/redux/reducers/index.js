import { combineReducers } from 'redux';


const initial = {
  login: '',
  password: '',
  redirectLogin: false,
  posts: [],
  friendsPosts: [],
  followButton: false,
  userMessageLogin: '',
  userMessageRegistration: '',
};
const reducer = (state = initial, action) => {
  const { data } = action;
  switch (action.type) {
    case 'REDIRECT_LOGIN':
      return {
        ...state,
        redirectLogin: data,
      };
    case 'GET_POSTS':
      return {
        ...state,
        posts: data,
      };
    case 'GET_FRIENDS_POSTS':
      return {
        ...state,
        friendsPosts: data,
      };
    case 'ADD_USER_MESSAGE_LOGIN':
      return {
        ...state,
        userMessageLogin: data,
      };
    case 'ADD_USER_MESSAGE_REGISTRATION':
      return {
        ...state,
        userMessageRegistration: data,
      };
    case 'HIDE_USER_MESSAGE':
      return {
        ...state,
        userMessageLogin: '',
        userMessageRegistration: '',
      };
    case 'CHANGE_FOLLOWING':
      return {
        ...state,
        followButton: !state.followButton,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer,
});

export default rootReducer;
