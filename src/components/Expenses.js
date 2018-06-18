import React, { Component} from 'react';
import { connect } from 'react-redux';
import Expense from './Expense';
import { removeExpense, setExpensesVisibilityFilter, setPageToView } from '../actions';
import strings from '../translates/strings';

const milliSecondsToDdMmYyyy = milliseconds => {
  let newDate = new Date(milliseconds);
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  month = `0${month +1}`.slice(0, 2);
  return `${date}.${month}.${year}`;
}

class Expenses extends Component {
  constructor (props) {
    super(props);
    this.state = {
      deleteId: null,
      category: this.props.match.params.id,
      amount: 0
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
    this.props.dispatch(removeExpense(this.state.deleteId));
  }

  changeShownCategory (event) {
    this.setState({
      category: event.target.value
    });
    this.props.dispatch(setPageToView(`/category/${event.target.value}`))
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      category: nextProps.match.params.id
    })
    this.shownCategory.value = nextProps.match.params.id;
    this.startDate.value = milliSecondsToDdMmYyyy(nextProps.expensesVisibilityFilter.startDate);
    this.endDate.value = milliSecondsToDdMmYyyy(nextProps.expensesVisibilityFilter.endDate);
  }

  applyFilter () {
    let startDate = this.startDate.value.split('.')[0];
    let startMonth = parseInt(this.startDate.value.split('.')[1], 10) - 1;
    let startYear = this.startDate.value.split('.')[2];
    let EndDate = this.endDate.value.split('.')[0];
    let EndMonth = parseInt(this.endDate.value.split('.')[1], 10) - 1;
    let EndYear = this.endDate.value.split('.')[2];
    let dateBegin =  new Date(startYear, startMonth, startDate, 0, 0, 0, 0).getTime();
    let dateEnd = new Date(EndYear, EndMonth, EndDate, 0, 0, 0, 0).getTime();
    let shownCategory = this.shownCategory.value;
    this.props.dispatch(setExpensesVisibilityFilter(dateBegin, dateEnd, shownCategory));
    this.setState({
      category: this.shownCategory.value
    });
    this.props.dispatch(setPageToView(`/category/${this.shownCategory.value}`))
  }

  render() {
    let {expenses, expensesVisibilityFilter, language, categories} = this.props;
    return (
      <div className="row">
        <div className="col-12 mt-3">
          <div className="form-group text-center">
            <label htmlFor="filter"><span className="badge badge-primary px-5 font-px-18 font-weight-normal">{strings[language]['choose_filter']}</span></label>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text px-w-90">{strings[language]['category']}:</div>
              </div>
              <select id="inputState" className="form-control" defaultValue={this.state.category} ref={node => this.shownCategory = node}>
                <option value="all">{strings[language]['all_categories']}</option>
                {categories.map(category => <option key={category.id} value={`${category.id}`}>{category[`title_${language}`]}</option> )}
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text px-w-90">{strings[language]['date']}:</div>
              </div>
              <input type="text" className="form-control datepicker" ref={node => this.startDate = node} placeholder={strings[language]['fromDate']} defaultValue={milliSecondsToDdMmYyyy(expensesVisibilityFilter.startDate)}/>
              <input type="text" className="form-control datepicker" ref={node => this.endDate = node} placeholder={strings[language]['toDate']} defaultValue={milliSecondsToDdMmYyyy(expensesVisibilityFilter.endDate)}/>
            </div>
          </div>
          <button className="btn btn-success w-100 mb-5" onClick={this.applyFilter.bind(this)}>{strings[language]['apply_filter']}</button>
          <table className="table table-striped">
            <thead className="bg-primary text-light">
              <tr>
                <th colSpan="3">{strings[language]['list']}&nbsp;<span>({strings[language]['summary']}: {expenses.length})</span></th>
              </tr>
            </thead>
            <tbody>
              {expenses.map(expense => {
                return <Expense key={expense.id} {...expense} categories={categories} onDeleteClick={this.setItemToDelete.bind(this)}/>
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
