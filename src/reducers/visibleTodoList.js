import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, SHOW_BY_DATE } from '../actions'
​
const getVisibleTodos = (todos, filter, date) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    case SHOW_BY_DATE:
      return todos.filter(t => t.date === date)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
​
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter, state.shown_date)
})
​
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})
​
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
