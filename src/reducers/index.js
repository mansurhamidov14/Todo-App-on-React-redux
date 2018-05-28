import { combineReducers } from 'redux';
import page from './page';
import count from './count';
import visibilityFilter from './visibilityFilter';
import todos from './todos';
import currentDate from './currentDate';

export default combineReducers({
  page,
  count,
  visibilityFilter,
  todos,
  currentDate
});
