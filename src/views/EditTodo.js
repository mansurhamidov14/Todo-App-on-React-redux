import React from 'react';
import EditedTodo from '../components/EditedTodo';

const EditTodo = ({match}) => (
  <div className="container-fluid rendered-component bg-light">
    <div className="row">
      <EditedTodo match={match}/>
    </div>
  </div>
);

export default EditTodo;
