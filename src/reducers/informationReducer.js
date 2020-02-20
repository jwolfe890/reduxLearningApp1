const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    // case "UPDATE_NAME":
    //   return { ...state, name: "bob" };
    // case "UPDATE_FOOD":
    //   return { ...state, favoriteFood: "hamburger" };
    case "ADD_SUPERHERO":
      debugger;

      // return { ...state, favoriteFood: "hamburger" };
      let newPerson = { name: action.name, superPower: action.superPower };
      let newStateValue = state.concat(newPerson);

      return newStateValue;
    default:
      return state;
  }
};

// return [...state, { name: action.type }];
