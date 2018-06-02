import { SET_PASSWORD } from '../actions';


const password = (state = null, action) => {
  switch (action.type) {
    case SET_PASSWORD:
      return action.password;
    default: return state;
  }
}

export default password;
