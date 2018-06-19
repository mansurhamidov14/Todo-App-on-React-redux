import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editTodo, getTodoById } from '../actions';
import strings from '../translates/strings';


class EditTodo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      successStatus: 'alert-danger',
      successMessage: strings[this.props.language]['todo_added_error'],
      id: parseInt(props.match.params.id, 10),
      text: '',
      date: ''
    }
    props.dispatch(getTodoById(parseInt(props.match.params.id, 10)))
  }

  componentWillReceiveProps (props) {
    props.dispatch(getTodoById(parseInt(props.match.params.id, 10)))
    console.log('props', props)
    this.setState({
      text: props.todo.text,
      date: props.todo.date
    })
  }

  handleDateChange (e) {
    this.setState({
      date: e.target.value
    });
  }

  handleTextChange (e) {
    this.setState({
      text: e.target.value
    })
  }

  submitForm () {
    let errors = [];
    if (!this.state.text.length) { errors.push('textError')}
    if (!errors.length) {
      this.setState({
        successStatus: 'alert-success',
        successMessage: strings[this.props.language]['todo_edited']
      })
      this.props.dispatch(editTodo({text: this.state.text, date:parseInt(this.state.date, 10)}));
    }
  }

  render () {
    let { language } = this.props;
    return (
      <div className="col-12 mt-3">
        <div className={`text-center alert ${this.state.successStatus}`} id="addSuccess" role="alert">
          {this.state.successMessage}
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
                value={this.state.text}
                onChange={this.handleTextChange.bind(this)}/>
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text px-w-90">{strings[language]['day_of_week']}:</div>
            </div>
            <select className="form-control" value={this.state.date} onChange={this.handleDateChange.bind(this)}>
              <option value="">{strings[language]['day_of_week']}</option>
              {
                [1, 2, 3, 4, 5, 6, 0].map(i => <option key={i} value={i}>{strings[language]['week_days'][i]}</option>)
              }
            </select>
          </div>
        </div>
        <button type="button" className="btn btn-success w-100" id="confirm" onClick={this.submitForm.bind(this)}>{strings[language]['add']}</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  language: state.language
})

export default connect(mapStateToProps)(EditTodo);