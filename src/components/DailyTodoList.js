import React from 'react';
import Todo from './Todo';
import toggleTodo from '../actions';

const DailyTodoList = ({todos, onTodoClick, onTodoDelete}) => (
  <div className="row">
    <div className="col-12">
      <table className="table table-striped">
        <thead className="bg-primary text-light">
          <tr>
            <th colSpan="2">Görülməli işlər</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => <Todo key={todo.id} {...todo} onToggleClick={() => onTodoClick(todo.id)} onDeleteClick={() => onTodoDelete(todo.id)}/>)}
          <tr><td colSpan="2" className="text-warning text-center font-px-24">{!todos.length ? 'Bu gün üçün görülməli iş əlavə edilməyib' : ''}</td></tr>
        </tbody>
      </table>
    </div>
  </div>
);



export default DailyTodoList;
