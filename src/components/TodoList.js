import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick, onTodoDelete, onShowMore, onFilterChange, visibilityFilter, count}) => (
  <div className="row">
    <div className="col-12">
      <div className="form-group">
        <label for="filter">Filtr seçin</label>
        <select id="inputState" className="form-control" value={visibilityFilter} onChange={(event) => onFilterChange(event.target.value)}>
          <option value="SHOW_ALL">Hamısını göstər</option>
          <option value="SHOW_COMPLETED">Yerinə yetirilmişlər</option>
          <option value="SHOW_ACTIVE">Yerinə yetirilməyənlər</option>
        </select>
      </div>
      <table className="table table-striped">
        <thead className="bg-primary text-light">
          <tr>
            <th colSpan="2">Ümumi siyahı</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => <Todo key={todo.id} {...todo} onToggleClick={() => onTodoClick(todo.id)} onDeleteClick={() => onTodoDelete(todo.id)}/>)}
          <tr><td colSpan="2" className="text-warning text-center font-px-24">{!todos.length ? 'Bu gün üçün görülməli iş əlavə edilməyib' : ''}</td></tr>
        </tbody>
      </table>
      <p className="text-center">
        <button className="btn btn-primary text" onClick={() => onShowMore(count)}>Show more</button>
      </p>
    </div>
  </div>
)



export default TodoList;
