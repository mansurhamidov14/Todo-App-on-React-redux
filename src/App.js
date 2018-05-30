import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import VisibleTodoList from './components/VisibleTodoList';
import DailyTodosPage from './views/DailyTodosPage';
import AddTodo from './views/AddTodo';
import Footer from './components/footer';
import strings from './translates/strings';

class App extends Component {
  render() {
    let { page } = this.props;
    return (
      <Router>
        <div className="App">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 bg-primary header">
                <h3 className="text-center text-center my-3 text-light">{strings['az'][page.slice(1)]}</h3>
              </div>
            </div>
          </div>
          <Route exact path="/" component={DailyTodosPage}/>
          <Route path="/home" component={DailyTodosPage}/>
          <Route path="/add_todo" component={AddTodo}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page
})

// <VisibleTodoList />
// <AddTodo />

export default connect (mapStateToProps)(App);
