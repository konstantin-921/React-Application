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
