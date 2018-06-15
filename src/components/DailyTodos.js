import { connect } from 'react-redux'
import { toggleTodo } from '../actions';
import DailyTodoList from './DailyTodoList';

const getDailyTodos = (todos, date) => {
  console.log(date);
  console.log(todos);
  return todos.filter(t => t.date === date);
}

const mapStateToProps = state => ({
  todos: getDailyTodos(state.todos, state.currentDate),
  currentDate: state.currentDate,
  language: state.language
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyTodoList)
