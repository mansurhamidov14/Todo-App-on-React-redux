import { SET_VISIBILITY_FILTER, SHOW_BY_DATE } from '../actions';

export const visibilityFilter = (state = SHOW_BY_DATE, action) => {
  switch (action.type) {
    case SHOW_BY_DATE:
      return action.filter;
    default:
      return state;
  }
}
