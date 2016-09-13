import { CHANGE_MESSAGE } from '../constants/example';


export function changeMessage(text) {
  return {
    type: CHANGE_MESSAGE,
    text
  };
}
