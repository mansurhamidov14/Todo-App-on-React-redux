import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions';
import strings from '../translates/strings';

const milliSecondsToDdMmYyyy = milliseconds => {
  let newDate = new Date(milliseconds);
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  date = `0${date}`.slice(-2);
  month = `0${month +1}`.slice(-2);
  return `${date}.${month}.${year}`;
}

class AddExpense extends Component {
  submitForm () {
    let fullDate = this.date.value.split('.');
    console.log(fullDate);
    let date = new Date(fullDate[2], fullDate[1]-1, fullDate[0], 0, 0, 0, 0);
    date = date.getTime();
    // this.coins.value = this.coins.value ? this.coins.value : 0;
    // this.manat.value = this.manat.value ? this.manat.value : 0;
    let amount = parseInt(this.manat.value, 10) + parseInt(this.coins.value, 10)/100;
    this.props.dispatch(addExpense({text: this.text.value, type: this.type.value, amount, category: this.category.value, date}));
    this.text.value = null;
    this.manat.value = `0`;
    this.coins.value = `00`;
  }

  render () {
    let { language, categories } = this.props;
    return (
      <div className="container-fluid rendered-component bg-light">
        <div className="row">
          <div className="col-12 mt-3">
            <div className="alert alert-success text-center" id="addSuccess" role="alert">
              {strings[language]['expense_added']}
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text px-w-90">{strings[language]['title']}:</div>
                </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder={strings[language]['title']}
                    ref={node => this.text = node}/>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text px-w-90">{strings[language]['category']}:</div>
                </div>
                <select ref={node => this.category = node} className="form-control" defaultValue={60}>
                  {
                    categories.map(category => <option key={category.id} value={category.id}>{category[`title_${language}`]}</option>)
                  }
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text px-w-90">{strings[language]['amount']}:</div>
                </div>
                <input type="text" className="form-control" ref={node => this.manat = node} placeholder={strings[language]['manat']}/>
                <input type="text" className="form-control" ref={node => this.coins = node} placeholder={strings[language]['penny']}/>
                <div className="input-group-append">
                  <div className="input-group-text">AZN</div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text px-w-90">{strings[language]['type']}:</div>
                </div>
                <select ref={node => this.type = node} className="form-control">
                  <option value={0}>{strings[language]['expense']}</option>
                  <option value={1}>{strings[language]['earning']}</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group date" data-provide="datepicker">
                <div className="input-group-prepend">
                  <div className="input-group-text px-w-90">{strings[language]['date']}:</div>
                </div>
                <input type="text" className="date form-control" id="datepicker" ref={node => this.date = node} placeholder={strings[language]['date']} defaultValue={milliSecondsToDdMmYyyy(new Date().getTime())}/>
                <div className="input-group-append">
                  <div className="input-group-text fa fa-calendar px-w-60"></div>
                </div>
                <div className="input-group-addon">
                    <span className="glyphicon glyphicon-th"></span>
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-success w-100" id="confirm" onClick={this.submitForm.bind(this)}>{strings[language]['add']}</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  language: state.language,
  categories: state.categories
})

export default connect(mapStateToProps)(AddExpense);
