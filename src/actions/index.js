export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SET_PAGE = 'SET_PAGE';
export const SET_DATE = 'SET_DATE';
export const SET_COUNT = 'SET_COUNT';
export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';

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

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const setPageToView = page => ({
  type: SET_PAGE,
  page
});


export const setShownDate = date => ({
  type: SET_DATE,
  date
});

export const setCount = count => ({
  type: SET_COUNT,
  count
});

export const changeLanguage = lang => ({
  type: SWITCH_LANGUAGE,
  lang
})
