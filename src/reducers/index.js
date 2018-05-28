import { combineReducers } from 'redux';
import page from './page';
import count from './count';
import visibilityFilter from './visibilityFilter';
import todos from './todos';

export default combineReducers({
  page,
  count,
  visibilityFilter,
  todos
});
