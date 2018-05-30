import React from 'react';
import { connect } from 'react-redux';
import { setPageToView } from '../actions';

const Footer = ({page, setPageToView}) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 bg-primary footer">
        <div className="row font-px-24">
          <div
            className={page === '/todolist' ?
              'col py-2 text-center active-tab' :
              'col py-2 text-center'}
               onClick={event => {event.preventDefault(); setPageToView('/todolist')}}
              ><a className="text-light fa fa-list"></a></div>
          <div
            className={page === '/home' ?
              'col py-2 text-center active-tab' :
              'col py-2 text-center'}
               onClick={event => {event.preventDefault(); setPageToView('/home')}}
              ><a className="text-light fa fa-calendar"></a></div>
          <div
            className={page === '/add_todo' ?
              'col py-2 text-center active-tab' :
              'col py-2 text-center'}
               onClick={event => {event.preventDefault(); setPageToView('/add_todo')}}
              ><a className="text-light fa fa-calendar-plus-o"></a></div>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  page: state.page
});

const mapDispatchToProps = dispatch => ({
  setPageToView: page => dispatch(setPageToView(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
