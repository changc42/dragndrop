import { SET_POSITION } from "./types";

export function setPosition(posArr) {
  return {
    type: SET_POSITION,
    payload: posArr
  };
}
