import React from 'react';
import Todo from './Todo';
import toggleTodo from '../actions';

const TodoList = ({todos, onTodoClick, onShowMore, count}) => (
  <div>
    <ul>
      {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>)}
    </ul>
    <button onClick={() => onShowMore(count)}>Show more</button>
  </div>
)



export default TodoList;
