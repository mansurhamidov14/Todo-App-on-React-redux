import { LOGIN } from '../actions';

const login = (state = false, action) => {
  switch (action.type) {
    case LOGIN:
      return action.is_logged_in;
    default: return state;
  }
}

export default login
