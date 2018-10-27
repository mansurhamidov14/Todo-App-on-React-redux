import {GET_TODO_BY_ID} from '../actions';
const initialState = {};

const editedTodo = (state = initialState, action) => {
  if (action.type === GET_TODO_BY_ID) {
    return action.payload[0]
  }
  return state;
};

export default editedTodo;
