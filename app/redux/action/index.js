import axios from 'axios';

export const request = () => {
  return {
    type: 'REQUEST',
  };
};

export const addHero = (array) => {
  return {
    type: 'ADD_HERO',
    array,
  };
};

export const addActiveHero = (list) => {
  return {
    type: 'ADD_ACTIVE_HERO',
    list,
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
