import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import strings from '../translates/strings';

class AddTodo extends Component {
  submitForm () {

    this.props.dispatch(addTodo({text: this.text.value, date:parseInt(this.date.value, 10)}));
    this.text.value = null;
    this.date.value = "";
  }

  render () {
    let { language } = this.props;
    return (
      <div className="container-fluid rendered-component bg-light">
        <div className="row">
          <div className="col-12 mt-3">
            <div className="alert alert-success text-center" id="addSuccess" role="alert">
              {strings[language]['todo_added']}
            </div>
            <div className="form-group">
              <div className="input-group">
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
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text px-w-90">{strings[language]['day_of_week']}:</div>
                </div>
                <select ref={node => this.date = node} className="form-control" defaultValue={new Date().getDay()}>
                  {
                    [1, 2, 3, 4, 5, 6, 0].map(i => <option key={i} value={i}>{strings[language]['week_days'][i]}</option>)
                  }
                </select>
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
  language: state.language
})

export default connect(mapStateToProps)(AddTodo);
