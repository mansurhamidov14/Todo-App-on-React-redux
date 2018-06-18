import React, { Component} from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';
import { removeExpense /*, setExpensesVisibilityFilter*/, setPageToView } from '../actions';
import strings from '../translates/strings';

const milliSecondsToDdMmYyyy = milliseconds => {
  let newDate = new Date(milliseconds);
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  month = `0${month +1}`.slice(1);
  return `${date}.${month}.${year}`;
}

class Expenses extends Component {
  constructor (props) {
    super(props);
    this.state = {
      deleteId: null,
      category: this.props.match.params.id,
      dateBegin: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0, 0).getTime() - 30 * 86400000,
      dateEnd: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, 0, 0).getTime()
    }
    console.log(this.state);
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
    this.props.dispatch(removeExpense(this.state.deleteId));
  }

  // changeFilter (event) {
  //   this.props.dispatch(setExpensesVisibilityFilter(this.state.dateBegin, this.state.dateEnd))
  // }

  changeShownCategory (event) {
    this.setState({
      category: event.target.value
    });
    this.props.dispatch(setPageToView(`/category/${event.target.value}`))
  }


  render() {
    let {expenses, beginDate, endDate, language, categories, match} = this.props;
    return (
      <div className="row">
        <div className="col-12 mt-3">
          <div className="form-group text-center">
            <label htmlFor="filter"><span className="badge badge-primary px-5 font-px-18 font-weight-normal">{strings[language]['choose_filter']}</span></label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text px-w-90">{strings[language]['category']}:</div>
              </div>
              <select id="inputState" className="form-control" value={this.state.cagegory} onChange={this.changeShownCategory.bind(this)}>
                <option value="all">{strings[language]['all_categories']}</option>
                {categories.map(category => <option key={category.id} value={`${category.id}`} onChange={this.changeShownCategory.bind(this)}>{category[`title_${language}`]}</option> )}
              </select>
            </div>
          </div>
          <table className="table table-striped">
            <thead className="bg-primary text-light">
              <tr>
                <th colSpan="3">{strings[language]['list']}&nbsp;<span>({strings[language]['summary']}: {this.state.category === 'all' ? expenses.length : expenses.filter(e => e.category === this.state.category).length})</span></th>
              </tr>
            </thead>
            <tbody>
              {expenses.map(expense => {
                if(this.state.category === 'all') {
                  return <Expense key={expense.id} {...expense} categories={categories} onDeleteClick={this.setItemToDelete.bind(this)}/>
                }
                else {
                  if(expense.category === this.state.category) {
                    return <Expense key={expense.id} {...expense} categories={categories} onDeleteClick={this.setItemToDelete.bind(this)}/>
                  }
                }
              })}
              <tr><td colSpan="2" className="text-danger text-center font-px-16">{!expenses.length ? strings[language]['empty_result'] : ''}</td></tr>
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

export default connect(state=>({categories:state.categories}))(Expenses);
