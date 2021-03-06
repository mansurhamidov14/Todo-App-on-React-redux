import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import strings from '../translates/strings';

class AddTodo extends Component {
  submitForm () {
    let fullDate = this.date.value.split('.');
    console.log(fullDate);
    let date = new Date(fullDate[2], fullDate[1]-1, fullDate[0], 0, 0, 0, 0);
    date = date.getTime();
    this.props.dispatch(addTodo({text: this.text.value, date}));
    this.text.value = null;
    this.date.value = null;
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
              <div className="input-group date" data-provide="datepicker">
                <div className="input-group-prepend">
                  <div className="input-group-text px-w-90">{strings[language]['date']}:</div>
                </div>
                <input type="text" className="date form-control" id="datepicker" ref={node => this.date = node} placeholder={strings[language]['date']}/>
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
  language: state.language
})

export default connect(mapStateToProps)(AddTodo);
