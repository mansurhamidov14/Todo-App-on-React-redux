import { connect } from 'react-redux'
import { toggleTodo, SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../actions'
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter, count) => {
  switch (filter) {
    case SHOW_ALL:
      return todos.sort((a, b) => b.date - a.date).slice(0, parseInt(count, 10));
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed).sort((a, b) => b.date - a.date).slice(0, parseInt(count, 10));
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed).sort((a, b) => b.date - a.date).slice(0, parseInt(count, 10));
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter, state.count),
  count: state.count,
  visibilityFilter: state.visibilityFilter,
  language: state.language
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
