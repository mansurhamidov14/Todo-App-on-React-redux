export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_PAGE = 'SET_PAGE';
export const SET_DATE = 'SET_DATE';
export const SET_COUNT = 'SET_COUNT';
export const SWITCH_LANGUAGE = 'SWITCH_LANGUAGE';
export const SET_PASSWORD = 'SET_PASSWORD';
export const LOGIN = 'LOGIN';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const ADD_EXPENSE = 'ADD_EXPENSE'
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE'

export const addTodo = payload => ({
  type: ADD_TODO,
  payload
});

export const addCategory = payload => ({
  type: ADD_CATEGORY,
  payload
});

export const addExpense = payload => ({
  type: ADD_EXPENSE,
  payload
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id: parseInt(id, 10)
});

export const removeExpense = id => ({
  type: REMOVE_EXPENSE,
  id: parseInt(id, 10)
});

export const toggleTodo = (id, weekDay) => {return {
  type: TOGGLE_TODO,
  payload: {
    id: parseInt(id, 10),
    weekDay
  }
}};

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

export const setPassword = password => ({
  type: SET_PASSWORD,
  password
});

export const login = is_logged_in => ({
  type: LOGIN,
  is_logged_in
})
