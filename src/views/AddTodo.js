import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
  submitForm () {
    let date = new Date(this.date.value);
    date = date.getTime();
    this.props.dispatch(addTodo({text: this.text.value, date}));
  }

  render () {
    return (
      <div>
        <input type="text" ref={node => this.text = node} placeholder="title"/><br />
        <input type="text" ref={node => this.date = node} placeholder="date"/><br />
        <button type="button" onClick={this.submitForm.bind(this)}>Add todo</button>
      </div>
    )
  }
}


export default connect()(AddTodo);
