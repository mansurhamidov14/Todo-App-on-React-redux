import React from 'react';

const Todo = ({text, onToggleClick, onDeleteClick, completed}) => (
  <tr className={completed ? 'table-success' : 'table-warning'}>
    <td>{text}</td>
    <td className="text-right">
      <button
        className={completed ? 'btn btn-success fa fa-check-square-o mr-2' : 'btn btn-warning fa fa-warning mr-2'}
        type="button"
        onClick={onToggleClick}>
      </button>
      <button
        className="btn btn-danger fa fa-trash-o"
        type="button" onClick={onDeleteClick}>
      </button>
    </td>
  </tr>
);

export default Todo;
