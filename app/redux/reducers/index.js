import { combineReducers } from 'redux';

const initialState = { heroes: [], activeHero: {} };
const filter = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HERO':
      return {
        heroes: state.heroes.concat(action.array),
      };
    case 'ADD_ACTIVE_HERO':
      return {
        heroes: state.heroes,
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
