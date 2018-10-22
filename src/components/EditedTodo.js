import { connect } from 'react-redux';
import EditTodo from './EditTodo';

const setTodoToEdit = (todos, id) => {
  return todos.filter(t => t.id === id)[0];
};

const mapStateToProps = state => ({
  todo: setTodoToEdit(state.todos, state.editedTodo)
});

export default connect(mapStateToProps)(EditTodo);
