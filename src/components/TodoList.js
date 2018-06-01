import React, { Component} from 'react';
import { connect } from 'react-redux';
import Todo from './TodoWithDate';
import { removeTodo, setVisibilityFilter, setCount } from '../actions';

class TodoList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      deleteId: null
    }
    console.log(this.props.visibiltyFilter);
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
    let {todos, onTodoClick, todoId, onDeleteClick, removeTodoonShowMore, onFilterChange, visibilityFilter, count} = this.props;
    return (
      <div className="row">
        <div className="col-12 mt-3">
          <div className="form-group text-center">
            <label htmlFor="filter"><span className="badge badge-primary px-5 font-px-18 font-weight-normal">Filtr seçin</span></label>
            <select id="inputState" className="form-control" value={visibilityFilter} onChange={this.changeFilter.bind(this)}>
              <option value="SHOW_ALL">Hamısını göstər</option>
              <option value="SHOW_COMPLETED">Yerinə yetirilmişlər</option>
              <option value="SHOW_ACTIVE">Yerinə yetirilməyənlər</option>
            </select>
          </div>
          <table className="table table-striped">
            <thead className="bg-primary text-light">
              <tr>
                <th colSpan="2">Siyahı</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(todo => <Todo key={todo.id} {...todo} todoId={todo.id} onToggleClick={() => onTodoClick(todo.id)} onDeleteClick={this.setItemToDelete.bind(this)} date={todo.date}/>)}
              <tr><td colSpan="2" className="text-danger text-center font-px-16">{!todos.length ? 'Filtr üzrə heçnə tapılmadı' : ''}</td></tr>
            </tbody>
          </table>
          <p className="text-center">
            <button className="btn btn-primary text w-100" onClick={this.showMore.bind(this)}>Daha çox göstər</button>
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
                        <h6 className="font-weight-bold">Silinmə əməliyyatını təsdiq edin</h6>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" onClick={this.cancelDelete.bind(this)}>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p className="font-px-18"
                        >Silmək istədiyinizə əminsiniz?</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-success font-px-18 px-5"
                            data-dismiss="modal"
                            onClick={this.confirmDelete.bind(this)}>Bəli</button>
                        <button
                            type="button"
                            className="btn btn-danger font-px-18 px-5"
                            data-dismiss="modal"
                            onClick={this.cancelDelete.bind(this)}>Xeyr</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )

  }
};

export default connect()(TodoList);
