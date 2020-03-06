import { combineReducers } from "redux";
import { positionReducer } from "./positionReducer";

console.log(positionReducer);
let reducers = combineReducers({
  position: positionReducer
});

export default reducers;
