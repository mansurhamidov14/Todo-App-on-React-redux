import React from 'react';
import TodoList from '../components/VisibleTodoList';

const Todolist = () => (
  <div className="container-fluid rendered-component bg-light">
    <div className="row">
      <div className="col-12">
        <TodoList />
      </div>
    </div>
  </div>
);

export default Todolist;
