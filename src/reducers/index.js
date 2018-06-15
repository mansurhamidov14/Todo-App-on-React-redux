import { combineReducers } from 'redux';
import page from './page';
import count from './count';
import todos from './todos';
import currentDate from './currentDate';
import language from './language';
import password from './password';
import is_logged_in from './authorization';

export default combineReducers({
  language,
  page,
  count,
  todos,
  currentDate,
  password,
  is_logged_in
});
