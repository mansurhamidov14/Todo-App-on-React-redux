import React, { Component} from 'react';
import { connect } from 'react-redux';
import Todo from './TodoWithDate';
import { removeTodo, setVisibilityFilter, setCount } from '../actions';
import strings from '../translates/strings';

class TodoList extends Component {
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

  changeFilter (event) {
    this.props.dispatch(setVisibilityFilter(event.target.value))
  }

  showMore () {
    this.props.dispatch(setCount(parseInt(this.props.count, 10)+10))
  }

  render() {
    let {todos, onTodoClick, visibilityFilter, language} = this.props;
    return (
      <div className="row">
        <div className="col-12 mt-3">
          <div className="form-group text-center">
            <label htmlFor="filter"><span className="badge badge-primary px-5 font-px-18 font-weight-normal">{strings[language]['choose_filter']}</span></label>
            <select id="inputState" className="form-control" value={visibilityFilter} onChange={this.changeFilter.bind(this)}>
              <option value="SHOW_ALL">{strings[language]['show_all']}</option>
              <option value="SHOW_COMPLETED">{strings[language]['show_completed']}</option>
              <option value="SHOW_ACTIVE">{strings[language]['show_active']}</option>
            </select>
          </div>
          <table className="table table-striped">
            <thead className="bg-primary text-light">
              <tr>
                <th colSpan="2">{strings[language]['list']}&nbsp;<span>{todos.length ? `(${strings[language]['summary']}: ${todos.length})` : ``}</span></th>
              </tr>
            </thead>
            <tbody>
              {todos.map(todo => <Todo key={todo.id} {...todo} todoId={todo.id} onToggleClick={() => onTodoClick(todo.id)} onDeleteClick={this.setItemToDelete.bind(this)} date={todo.date}/>)}
              <tr><td colSpan="2" className="text-danger text-center font-px-16">{!todos.length ? strings[language]['empty_result'] : ''}</td></tr>
            </tbody>
          </table>
          <p className="text-center">
            <button className="btn btn-primary text w-100" onClick={this.showMore.bind(this)}>{strings[language]['show_more']}</button>
          </p>
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

export default connect()(TodoList);
