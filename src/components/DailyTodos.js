import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../actions';
import DailyTodoList from './DailyTodoList';

const getDailyTodos = (todos, date) => {
  return todos.filter(t => t.date === date);
}

const mapStateToProps = state => ({
  todos: getDailyTodos(state.todos, state.currentDate),
  currentDate: state.currentDate
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyTodoList)
