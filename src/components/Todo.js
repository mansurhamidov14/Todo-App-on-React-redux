import React from 'react';

const Todo = ({text, onClick, completed}) => (
  <li onClick={onClick} style={{color: completed ? '#0c0' : '#c00', marginBottom:'10px'}}>{text}</li>
);

export default Todo;
