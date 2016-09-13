import { CHANGE_MESSAGE } from '../constants/example';

const initialState = {
  message: 'hello_world',
  message2: 'with love'
};


export default function (state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case CHANGE_MESSAGE:
      return {
        ...state,
        message: action.text
      };
    default:
      return state;
  }
}
