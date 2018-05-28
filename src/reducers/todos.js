import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions';

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {...action.payload, completed:false, id: state.length === 0 ? 1 : state[state.length - 1].id + 1}];
    case REMOVE_TODO:
      return [
      ...state.slice(0, action.id),
      ...state.slice(action.id + 1)
    ];
    case TOGGLE_TODO:
      return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : {...todo, completed: todo.completed});
    default:
      return state;
  }
}

export default todos;
