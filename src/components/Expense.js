import React from 'react';
import strings from '../translates/strings'

const Expense = ({id, type, amount, category, categories, date, icon, text, onDeleteClick}) => {
  let expenseDate = new Date(date).getDate();
  let expenseMonth = strings['az'].months[new Date(date).getMonth()];
  let expenseYear = new Date(date).getFullYear();
  return (
    <tr className={type === '1' ? 'table-success' : 'table-danger'}>
      <td><i className={`fa fa-${categories[categories.indexOf(categories.filter(c => c.id === parseInt(category, 10))[0])]['icon']}`}></i></td>
      <td>{text} ({amount} AZN)<br/><span className="text-secondary font-px-13">{expenseDate} {expenseMonth} {expenseYear}</span></td>
      <td className="text-right">
        <button
          className="btn btn-danger fa fa-trash-o"
          type="button"
          data-toggle="modal"
          onClick={onDeleteClick}
          data-target="#confirmModalLong"
          data-delete-id={id}>
        </button>
      </td>
    </tr>
  )
};

export default Expense;
