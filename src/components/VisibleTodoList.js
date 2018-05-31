import { connect } from 'react-redux'
import { toggleTodo, removeTodo, setCount, SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, SHOW_BY_DATE, SET_VISIBILITY_FILTER, setVisibilityFilter } from '../actions'
import TodoList from './TodoList'
import {  } from '../actions'

const getVisibleTodos = (todos, filter, count) => {
  switch (filter) {
    case SHOW_ALL:
      return todos.slice(0, parseInt(count, 10));
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed).slice(0, parseInt(count, 10));
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed).slice(0, parseInt(count, 10));
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter, state.count),
  count: state.count,
  visibilitFilter: state.visibilitFilter
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
