import { connect } from 'react-redux';
import Expenses from './Expenses';

const getVisibleExpenses = (expenses, filter) => {
    return expenses.filter(e => e.date >= filter.startDate && e.date <= filter.endDate);
}

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.expensesVisibilityFilter),
  expensesVisibilityFilter: state.expensesVisibilityFilter,
  language: state.language
})


export default connect(
  mapStateToProps
)(Expenses)
