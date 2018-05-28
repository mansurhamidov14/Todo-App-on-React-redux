export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_BY_DATE = 'SHOW_BY_DATE';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SET_PAGE = 'SET PAGE';
export const TODOS_BY_DATE = 'TODOS_BY_DATE';
export const ADD_TODO_PAGE = 'ADD_TODO_PAGE';
export const TODO_LIST_PAGE = 'TODO_LIST_PAGE';
export const SET_DATE = 'SET_DATE';

export const addTodo = payload => ({
  type: ADD_TODO,
  payload
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id: parseInt(id, 10)
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id: parseInt(id, 10)
});

export const SET_VISIBILITY_FILTER = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const setPageToView = page => ({
  type: SET_PAGE,
  page
});

export const SET_DATE = date => ({
  type: SET_DATE,
  date
})
