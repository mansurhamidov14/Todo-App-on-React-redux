import React, { Component } from 'react';
import DailyTodos from './components/DailyTodos';
import CurrentDate from './components/CurrentDate';
// import VisibleTodoList from './components/VisibleTodoList';
// import AddTodo from './views/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-primary header">
            <h3 className="text-center text-center my-3 text-light">Gündəlik</h3>
          </div>
        </div>
      </div>


      <div className="container-fluid rendered-component bg-light">
        <div className="row">
          <div className="col-12">
            <CurrentDate />
            <DailyTodos />
          </div>
        </div>
      </div>


      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-primary footer">
            <div className="row font-px-24">
              <div className="col py-2 text-center"><a className="text-light fa fa-list"></a></div>
              <div className="col py-2 text-center active-tab"><a className="text-light fa fa-calendar"></a></div>
              <div className="col py-2 text-center"><a className="text-light fa fa-calendar-plus-o"></a></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

// <VisibleTodoList />
// <AddTodo />

export default App;
