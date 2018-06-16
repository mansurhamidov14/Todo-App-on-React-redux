import { ADD_EXPENSE, REMOVE_EXPENSE, TOGGLE_EXPENSE } from '../actions';

const initialState = [];

const expenses = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, {...action.payload, id: state.length === 0 ? 1 : state[state.length - 1].id + 1}];
    case REMOVE_EXPENSE:
      let index = state.indexOf(...state.filter(t => t.id === action.id))
      return [
      ...state.slice(0, index),
      ...state.slice(index + 1)
    ];
    default:
      return state;
  }
}

export default expenses;
