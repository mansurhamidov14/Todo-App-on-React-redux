import React from 'react';
import Expenses from '../components/VisibleExpensesList';

const ExpensesList = ({match}) => (
  <div className="container-fluid rendered-component bg-light">
    <div className="row">
      <div className="col-12">
        <Expenses match={match}/>
      </div>
    </div>
  </div>
);

export default ExpensesList;
