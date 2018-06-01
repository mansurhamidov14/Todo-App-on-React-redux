import React from 'react';
import strings from '../translates/strings'

const Todo = ({todoId, text, onToggleClick, onDeleteClick, completed, date}) => {
  let todoDate = new Date(date).getDate();
  let todoMonth = strings['az'].months[new Date(date).getMonth()];
  let todoYear = new Date(date).getFullYear();
  return (
    <tr className={completed ? 'table-success' : 'table-warning'}>
      <td>{text}<br/><span className="text-secondary font-px-13">{todoDate} {todoMonth} {todoYear}</span></td>
      <td className="text-right px-w-120">
        <button
          className={completed ? 'btn btn-success fa fa-check-square-o mr-2' : 'btn btn-warning fa fa-warning mr-2'}
          type="button"
          data-delete-id={todoId}
          onClick={onToggleClick}>
        </button>
        <button
          className="btn btn-danger fa fa-trash-o"
          type="button"
          data-toggle="modal"
          onClick={onDeleteClick}
          data-target="#confirmModalLong"
          data-delete-id={todoId}>
        </button>
      </td>
    </tr>
  )
};

export default Todo;
