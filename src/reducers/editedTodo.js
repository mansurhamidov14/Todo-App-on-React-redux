import {GET_TODO_BY_ID} from '../actions';
const initialState = 1;

const editedTodo = (state = initialState, action) => {
  if (action.type === GET_TODO_BY_ID) {
    return action.id
  }
  return state;
}

export default editedTodo;
