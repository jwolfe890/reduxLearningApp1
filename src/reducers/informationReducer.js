const initialState = {
  name: "",
  favoriteFood: "pizza"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      debugger;

      return { ...state, name: "bob" };
    case "UPDATE_FOOD":
      return { ...state, favoriteFood: "hamburger" };
    default:
      return state;
  }
};
