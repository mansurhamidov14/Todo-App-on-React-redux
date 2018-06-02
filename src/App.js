import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import DailyTodosPage from './views/DailyTodosPage';
import AddTodo from './views/AddTodo';
import Todolist from './views/TodoList';
import Settings from './views/Settings';
import Footer from './components/footer';
import strings from './translates/strings';

class App extends Component {
  render() {
    let { page, language } = this.props;
    return (
      <Router>
        <div className="App">
          <input type="hidden" defaultValue={language} id="currentLanguage"/>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 bg-primary header">
                <h3 className="text-center text-center my-3 text-light">{strings[language][page.slice(1)]}</h3>
              </div>
            </div>
          </div>
          <Route exact path="/" component={DailyTodosPage}/>
          <Route path="/home" component={DailyTodosPage}/>
          <Route path="/add_todo" component={AddTodo}/>
          <Route path="/todolist" component={Todolist}/>
          <Route path="/settings" component={Settings}/>
          <Footer />
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
