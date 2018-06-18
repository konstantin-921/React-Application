import axios from 'axios';

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
