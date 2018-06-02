import React, { Component} from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { removeTodo } from '../actions';
import strings from '../translates/strings';

class DailyTodoList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      deleteId: null
    }
  }

  cancelDelete () {
    this.setState({
      deleteId: null
    })
  }

  setItemToDelete(event) {
    this.setState({
        deleteId : event.target.getAttribute('data-delete-id')
    });
  }

  confirmDelete (event) {
    this.props.dispatch(removeTodo(this.state.deleteId));
  }

  render() {
    let {todos, onTodoClick, todoId, onDeleteClick, removeTodo, language} = this.props;
    return (
      <div className="row">
        <div className="col-12">
          <table className="table table-striped">
            <thead className="bg-primary text-light">
              <tr>
                <th colSpan="2">{strings[language]['todos']}&nbsp;<span>{todos.length ? `(${strings[language]['summary']}: ${todos.length})` : ``}</span></th>
              </tr>
            </thead>
            <tbody>
              {todos.map(todo => <Todo key={todo.id} {...todo} todoId={todo.id} onToggleClick={() => onTodoClick(todo.id)} onDeleteClick={this.setItemToDelete.bind(this)}/>)}
              <tr><td colSpan="2" className="text-danger text-center font-px-16">{!todos.length ? strings[language]['notodo_this_day'] : ''}</td></tr>
            </tbody>
          </table>
        </div>
        <div
            className="modal fade"
            id="confirmModalLong"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="confirmModalLongTitle"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h6 className="font-weight-bold">{strings[language]['confirm_deleting']}</h6>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" onClick={this.cancelDelete.bind(this)}>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p className="font-px-18"
                        >{strings[language]['delete_are_you_sure']}</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-success font-px-18 px-5"
                            data-dismiss="modal"
                            onClick={this.confirmDelete.bind(this)}>{strings[language]['yes']}</button>
                        <button
                            type="button"
                            className="btn btn-danger font-px-18 px-5"
                            data-dismiss="modal"
                            onClick={this.cancelDelete.bind(this)}>{strings[language]['no']}</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )

  }
};

export default connect()(DailyTodoList);
