import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


const initial = { login: '', password: '', redirectLogin: false };
const reducer = (state = initial, action) => {
  const { data } = action;
  switch (action.type) {
    case 'REDIRECT_LOGIN':
      return {
        ...state,
        redirectLogin: data,
      };
    default:
      return state;
  }
};

const initialState = { heroes: [], nameHeroes: [], loading: true };

const filter = (state = initialState, action) => {
  const { data } = action;
  switch (action.type) {
    case 'REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_HERO':
      return {
        ...state,
        heroes: state.heroes.concat(data),
        loading: false,
      };
    case 'ADD_ACTIVE_HERO':
      if (state.nameHeroes.includes(data)) {
        return state;
      }
      return { ...state, nameHeroes: state.nameHeroes.concat(data) };
    case 'DELETE_ACTIVE_HERO':
      return {
        ...state, nameHeroes: state.nameHeroes.filter((elem) => { return elem !== data; }),
      };
    case 'CLEAR_HEROES':
      return {
        ...state,
        heroes: [],
        nameHeroes: [],
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  filter,
  reducer,
  routing: routerReducer,
});

export default rootReducer;
