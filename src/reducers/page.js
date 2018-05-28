import { SET_PAGE, TODOS_BY_DATE } from '../actions';

const page = (state = TODOS_BY_DATE, action) => {
  switch (action.type) {
    case SET_PAGE:
      return action.page;
    default:
      return state;
  }
}

export default page;
