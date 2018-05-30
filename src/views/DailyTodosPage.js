import React from 'react';
import DailyTodos from '../components/DailyTodos';
import CurrentDate from '../components/CurrentDate';

const DailyTodosPage = () => (
  <div className="container-fluid rendered-component bg-light">
    <div className="row">
      <div className="col-12">
        <CurrentDate />
        <DailyTodos />
      </div>
    </div>
  </div>
);

export default DailyTodosPage;
