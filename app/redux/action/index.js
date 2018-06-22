import axios from 'axios';
import help from '../../helpers/helperLogin';
import api from '../../helpers/api';

const localhost = 'http://localhost:3000';

export const redirectLogin = (data) => {
  return {
    type: 'REDIRECT_LOGIN',
    data,
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
          console.log(response);
        } else {
          api.post(`${localhost}/auth/secret`)
            .then(help.checkStatus)
            .then(() => dispatch(redirectLogin(true)))
            .catch((error) => {
              console.log(error);
            });
        }
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

export const request = () => {
  return {
    type: 'REQUEST',
  };
};

export const clearHeroes = () => {
  return {
    type: 'CLEAR_HEROES',
  };
};

export const addHero = (data) => {
  return {
    type: 'ADD_HERO',
    data,
  };
};

export const addActiveHero = (data) => {
  return {
    type: 'ADD_ACTIVE_HERO',
    data,
  };
};

export const deleteActiveHero = (data) => {
  return {
    type: 'DELETE_ACTIVE_HERO',
    data,
  };
};

export function getHeroes() {
  return (dispatch) => {
    return axios.get('https://swapi.co/api/people/')
      .then(response => dispatch(addHero(response.data.results)))
      .catch((error) => {
        console.log(error);
      });
  };
}
