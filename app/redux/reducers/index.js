import { combineReducers } from 'redux';

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
      if (state.nameHeroes.findIndex((elem) => { return elem === data; })) {
        return { ...state, nameHeroes: state.nameHeroes.concat(data) };
      }
      return state;
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
});

export default rootReducer;
