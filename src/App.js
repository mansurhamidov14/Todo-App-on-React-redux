import React, { Component } from 'react';
import VisibleTodoList from './components/VisibleTodoList';
import AddTodo from './views/AddTodo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <VisibleTodoList />
        <AddTodo />
      </div>
    );
  }
}

export default App;
