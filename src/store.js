import { createStore, combineReducers } from "redux";
import informationReducer from "./reducers/informationReducer";

const reducers = combineReducers({
  informationReducer
});

export default createStore(reducers);
