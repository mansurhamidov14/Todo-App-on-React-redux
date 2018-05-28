import { SET_DATE } from '../actions';

const initialState = new Date().getTime();

const currentDate = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return action.date;
    default:
      return state;
  }
}

export default currentDate;
