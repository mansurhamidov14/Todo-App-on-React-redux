import { SET_PAGE } from '../actions';

const page = (state = '/weekdayslist', action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.page;
    default:
      return state;
  }
}

export default page;
