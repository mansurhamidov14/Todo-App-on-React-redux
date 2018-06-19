import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO } from '../actions';

const initialState = [];
const today = new Date();
const dayOfWeek = today.getDay();
const dayOfMonth = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
const todayDate = new Date(year, month, dayOfMonth, 0, 0, 0, 0).getTime();
const setDateToToggle = (todayDate, todoDay) => todayDate + 86400000 * (todoDay - dayOfWeek);
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {...action.payload, completed:null, id: state.length === 0 ? 1 : state[state.length - 1].id + 1}];
    case REMOVE_TODO:
      let index = state.indexOf(...state.filter(t => t.id === action.id))
      return [
      ...state.slice(0, index),
      ...state.slice(index + 1)
    ];
    case TOGGLE_TODO:
      return state.map(todo => todo.id === action.payload.id ? {...todo, completed: todo.completed !== setDateToToggle(todayDate, action.payload.weekDay) ? setDateToToggle(todayDate, action.payload.weekDay) : null} : {...todo, completed: todo.completed});
    case EDIT_TODO:
      return state.map(todo => todo.id === action.payload.id ? {...todo,  ...action.payload} : {...todo});
    default:
      return state;
  }
}

export default todos;
