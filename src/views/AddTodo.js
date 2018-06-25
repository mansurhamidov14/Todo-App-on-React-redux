import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import strings from '../translates/strings';

class AddTodo extends Component {
  constructor (props) {
    super(props);
    this.day = [];
    this.state = {
      successStatus: 'alert-danger',
      successMessage: strings[this.props.language]['todo_added_error'],
      textHasError: '',
      dayHasError: ''
    }
  }

  submitForm () {
    let errors = [];
    if (!this.text.value.length) { errors.push('textError'); this.setState({textHasError: 'has-error'})}
    var daysToAdd = this.day.filter(d => d.checked);
    if (!daysToAdd.length) {errors.push('daysError'); this.setState({dayHasError:'has-error'})}
    if (!errors.length) {
      this.setState({
        successStatus: 'alert-success',
        successMessage: strings[this.props.language]['todo_added'],
        dayHasError: '',
        textHasError: ''
      })
      daysToAdd.forEach(d => {
        this.props.dispatch(addTodo({text: this.text.value, date:parseInt(d.value, 10)}));
      })
    }
    this.text.value = null;
  }

  render () {
    let { language } = this.props;
    return (
      <div className="container-fluid rendered-component bg-light pb-4">
        <div className="row">
          <div className="col-12 mt-3">
            <div className={`text-center alert ${this.state.successStatus}`} id="addSuccess" role="alert">
              {this.state.successMessage}
            </div>
            <div className="form-group">
              <div className={`input-group ${this.state.textHasError}`}>
                <div className="input-group-prepend">
                  <div className="input-group-text px-w-90">{strings[language]['title']}:</div>
                </div>
                <input
                    type="text"
                    className="form-control"
                    id="shooting-position-x"
                    placeholder={strings[language]['title']}
                    ref={node => this.text = node}/>
              </div>
            </div>
            <div className="alert alert-primary mt-4 text-center px-5 " role="alert">
              {strings[language]['choose_day_of_week']}
            </div>
            <ul className={`list-group mb-3 day-checkboxes ${this.state.dayHasError}`}>
              {
                [1, 2, 3, 4, 5, 6, 0].map(i =>
                  <label key={i}>
                    <input defaultChecked={i === new Date().getDay()} type="checkbox" id={`day_${i}`} ref={node => this.day[i] = node} defaultValue={i}/>
                    <li className={`list-group-item`}>
                      {strings[language]['week_days'][i]}
                    </li>
                  </label>
                )
              }
            </ul>

            <button type="button" className="btn btn-success w-100" id="confirm" onClick={this.submitForm.bind(this)}>{strings[language]['add']}</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  language: state.language
})

export default connect(mapStateToProps)(AddTodo);
