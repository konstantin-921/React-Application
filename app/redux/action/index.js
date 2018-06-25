import help from '../../helpers/helperLogin';
import api from '../../helpers/api';

const localhost = 'http://localhost:3000';

export const redirectLogin = (data) => {
  return {
    type: 'REDIRECT_LOGIN',
    data,
  };
};

export const posts = (data) => {
  return {
    type: 'GET_POSTS',
    data,
  };
};

export const friensPost = (data) => {
  return {
    type: 'GET_FRIENDS_POSTS',
    data,
  };
};

export const isFetching = () => {
  return {
    type: 'IS_FETCHING',
  };
};

export function logining(username, userpass) {
  const userData = {
    username,
    userpass,
  };
  const url = new URL(`${localhost}/auth/login`);
  url.search = new URLSearchParams(userData);
  return (dispatch) => {
    return fetch(url)
      .then(help.checkStatus)
      .then(help.parseJSON)
      .then(help.saveToken)
      .then((response) => {
        if (!response.token) {
          return console.log(response);
        }
        return api.post(`${localhost}/auth/secret`)
          .then(help.checkStatus)
          .then(() => dispatch(redirectLogin(true)))
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function registration(username, userpass, useremail) {
  const userSignUp = {
    username,
    userpass,
    useremail,
  };
  return () => {
    return api.post(`${localhost}/users`, userSignUp)
      .then(help.checkStatus)
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getMyPost() {
  const data = {
    id: localStorage['user.id'],
  };
  const url = new URL(`${localhost}/posts`);
  url.search = new URLSearchParams(data);
  return (dispatch) => {
    return api.get(url)
      .then(help.checkStatus)
      .then(response => dispatch(posts(response.data)))
      .then(() => dispatch(isFetching()))
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getFriendsPost() {
  const data = {
    id: localStorage['user.id'],
  };
  const url = new URL(`${localhost}/posts/friendsposts`);
  url.search = new URLSearchParams(data);
  return (dispatch) => {
    return api.get(url)
      .then(help.checkStatus)
      .then(response => dispatch(friensPost(response.data)))
      .then(() => dispatch(isFetching()))
      .catch((error) => {
        console.log(error);
      });
  };
}
