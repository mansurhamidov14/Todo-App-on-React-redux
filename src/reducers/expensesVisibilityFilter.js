const initialState = {
  startDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0, 0).getTime() - 30 * 86400000,
  endDate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0, 0).getTime()
};

const expensesVisibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'EXPENSES_VISIBILITY_FILTER':
      return action.filter;
    default:
      return initialState;
  }
}

export default expensesVisibilityFilter;
