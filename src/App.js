import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import DailyTodosPage from './views/DailyTodosPage';
import AddTodo from './views/AddTodo';
import AddExpense from './views/AddExpense';
import ExpensesList from './views/ExpensesList';
import WeekDaysList from './views/WeekDaysList';
import EditTodo from './views/EditTodo';
import Settings from './views/Settings';
import About from './views/About';
import Login from './views/Login';

import Menu from './components/Menu';

class App extends Component {
  render() {
    let { page, language } = this.props;
    return (
      <Router>
        <div className="App">
          <Menu language={language} page={page}/>
          <input type="hidden" defaultValue={language} id="currentLanguage"/>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 bg-primary header">
                <button id="toggle-menu" className="btn btn-primary mt-2">
                  <span className="fa fa-bars font-px-30"></span>
                </button>
              </div>
            </div>
          </div>
          <Login/>
          <Route exact path="/" component={WeekDaysList}/>
          <Route path="/home" component={DailyTodosPage}/>
          <Route path="/add_todo" component={AddTodo}/>
          <Route path="/weekdayslist" component={WeekDaysList}/>
          <Route path="/add_expense" component={AddExpense}/>
          <Route path="/category/:id" component={ExpensesList}/>
          <Route path="/edit_todo/:id" component={EditTodo}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page,
  language: state.language
})

// <VisibleTodoList />
// <AddTodo />

export default connect (mapStateToProps)(App);
