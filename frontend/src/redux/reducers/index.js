import { combineReducers, createStore } from "redux";
import { positionReducer } from "./positionReducer";

let reducers = combineReducers({
  position: positionReducer
});

let store = createStore(reducers);
export default store;
