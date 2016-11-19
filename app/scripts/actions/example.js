// import axios from 'axios';
import { CHANGE_MESSAGE } from '../constants/example';

// export function changeMessage(text) {
//   const request = axios.get('http://localhost:3333/bla-bla/bla');

//   return (dispatch) => {
//     request.then(() =>
//       dispatch({
//         type: CHANGE_MESSAGE,
//         text
//       })
//     ).catch((error) =>
//       dispatch({
//         type: CHANGE_MESSAGE,
//         text: 'THIS IS ERROR'
//       })
//     );
//   };
// }

export function changeMessage(text) {
  return {
    type: CHANGE_MESSAGE,
    text
  };
}
