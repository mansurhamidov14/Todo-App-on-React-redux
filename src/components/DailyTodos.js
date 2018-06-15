import { connect } from 'react-redux'
import { toggleTodo } from '../actions';
import DailyTodoList from './DailyTodoList';

const getDailyTodos = (todos, date) => {
  return todos.filter(t => t.date === date);
}

const mapStateToProps = state => ({
  todos: getDailyTodos(state.todos, state.currentDate),
  currentDate: state.currentDate,
  language: state.language
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id, date) => dispatch(toggleTodo(id, date))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyTodoList)
