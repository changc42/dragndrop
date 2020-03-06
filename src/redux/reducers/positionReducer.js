import { SET_POSITION } from "../actions/types";

export const positionReducer = (state = [0, 0], action) => {
  if ((action.type = SET_POSITION)) return action.payload;
  return state;
};
