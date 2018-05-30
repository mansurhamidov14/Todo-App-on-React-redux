import { SET_DATE } from '../actions';

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = ("0" + (today.getMonth() + 1)).slice(-2);
const currentDayOfMonth = today.getDate();
const initialState = new Date(`${currentMonth}/${currentDayOfMonth}/${currentYear}`).getTime();

const currentDate = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return action.date;
    default:
      return state;
  }
}

export default currentDate;
