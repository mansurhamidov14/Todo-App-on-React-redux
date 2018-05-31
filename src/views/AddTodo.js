import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {
  submitForm () {
    let date = new Date(this.date.value);
    date = date.getTime();
    this.props.dispatch(addTodo({text: this.text.value, date}));
    this.text.value = null;
    this.date.value = null;
  }

  render () {
    return (
      <div className="container-fluid rendered-component bg-light">
        <div className="row">
          <div className="col-12 mt-3">
            <div className="alert alert-success text-center" id="addSuccess" role="alert">
              Görüləcək iş müvəffəqiyyətlə əlavə olundu!
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text px-w-90">Başlıq</div>
                </div>
                <input
                    type="text"
                    className="form-control"
                    id="shooting-position-x"
                    placeholder="Başlıq"
                    ref={node => this.text = node}/>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group date" data-provide="datepicker">
                <div className="input-group-prepend">
                  <div className="input-group-text px-w-90">Tarix</div>
                </div>
                <input type="text" className="date form-control" id="datepicker" ref={node => this.date = node} placeholder="Tarix"/>
                <div className="input-group-append">
                  <div className="input-group-text fa fa-calendar px-w-60"></div>
                </div>
                <div className="input-group-addon">
                    <span className="glyphicon glyphicon-th"></span>
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-success w-100" id="addTodo" onClick={this.submitForm.bind(this)}>Əlavə et</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(AddTodo);
