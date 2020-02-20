export const updateName = information => {
  return {
    type: "UPDATE_NAME",
    information
  };
};

export const updateFood = information => {
  return {
    type: "UPDATE_FOOD",
    information
  };
};

export const addSuperHero = (name, superPower) => {
  return {
    type: "ADD_SUPERHERO",
    name: name,
    superPower: superPower
  };
};
