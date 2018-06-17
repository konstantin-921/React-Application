import { combineReducers } from 'redux';

const initialState = { heroes: [], activeHero: {}, loading: true };
const filter = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_HERO':
      return {
        ...state,
        heroes: state.heroes.concat(action.array),
        loading: false,
      };
    case 'ADD_ACTIVE_HERO':
      return {
        ...state,
        activeHero: Object.assign({}, state.activeHero, action.list),
      };
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  filter,
});

export default rootReducer;
