import React from 'react';

const Todo = ({todoId, text, onToggleClick, onDeleteClick, completed, date}) => {
  let today = new Date();
  let currentDate = today.getDate();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();
  let currentDay = today.getDay();
  let currentMilliSeconds = new Date(currentYear, currentMonth, currentDate, 0, 0, 0, 0).getTime();
  let differenceInMilliseconds = 86400000 * (date - currentDay);
  let dateToBeCompleted = currentMilliSeconds + differenceInMilliseconds;
  return (
    <tr className={completed < dateToBeCompleted ? 'table-warning' : 'table-success'}>
      <td>{text}</td>
      <td className="text-right px-w-120">
        <button
          className={completed < dateToBeCompleted ? 'btn btn-warning fa fa-warning mr-2' : 'btn btn-success fa fa-check-square-o mr-2'}
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
  );
}

export default Todo;
