import { connect } from 'react-redux';
import Expenses from './Expenses';

const calculateBalance = (array = [], initialBalance = 0) => {
  for (let i = 0; i < array.length; i++) {
    initialBalance = array[i].type === '0' ? initialBalance - array[i].amount : initialBalance + array[i].amount
  }
  return initialBalance;
}

const getVisibleExpenses = (expenses, filter) => {
    if(filter.shownCategory === 'all') {
      return expenses.filter(e => e.date >= filter.startDate && e.date <= filter.endDate).sort((a, b) => b.date - a.date);
    }
    return expenses.filter(e => e.date >= filter.startDate && e.date <= filter.endDate && e.category === filter.shownCategory).sort((a, b) => b.date - a.date);
}

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.expensesVisibilityFilter),
  expensesVisibilityFilter: state.expensesVisibilityFilter,
  balance: calculateBalance(getVisibleExpenses(state.expenses, state.expensesVisibilityFilter)),
  language: state.language
})


export default connect(
  mapStateToProps
)(Expenses)
