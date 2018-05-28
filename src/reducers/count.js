import { SET_COUNT } from '../actions';

const count = (state = 10, action) => {
  switch (action.type) {
    case SET_COUNT:
      return action.count;
    default:
      return state;
  }
}

export default count;
