import { connect } from 'react-redux';
import Expenses from './Expenses';

const getVisibleExpenses = (expenses, filter) => {
    if(filter.shownCategory === 'all') {
      return expenses.filter(e => e.date >= filter.startDate && e.date <= filter.endDate);
    }
    return expenses.filter(e => e.date >= filter.startDate && e.date <= filter.endDate && e.category === filter.shownCategory);
}

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.expensesVisibilityFilter),
  expensesVisibilityFilter: state.expensesVisibilityFilter,
  language: state.language
})


export default connect(
  mapStateToProps
)(Expenses)
