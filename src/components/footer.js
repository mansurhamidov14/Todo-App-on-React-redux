import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPageToView } from '../actions';

const Footer = ({page, setPageToView}) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 bg-primary footer">
        <div className="row font-px-24">
          <Link className="col none-decoration px-0" to="/todolist">
            <div
              className={page === '/todolist' ?
                'py-2 text-center active-tab' :
                'py-2 text-center'}
                 onClick={event => {setPageToView('/todolist'); return}}
                ><span className="text-light fa fa-list"></span>
            </div>
          </Link>
          <Link className="col none-decoration px-0" to="/home">
            <div
              className={page === '/home' ?
                'py-2 text-center active-tab' :
                'py-2 text-center'}
                 onClick={event => {setPageToView('/home');}}
              ><span className="text-light fa fa-calendar"></span>
            </div>
          </Link>
          <Link className="col none-decoration px-0" to="/add_todo">
            <div
              className={page === '/add_todo' ?
                'py-2 text-center active-tab' :
                'py-2 text-center'}
                 onClick={event => {setPageToView('/add_todo');}}
                ><span className="text-light fa fa-calendar-plus-o"></span>
            </div>
          </Link>
          <Link className="col none-decoration px-0" to="/settings">
            <div
              className={page === '/settings' ?
                'py-2 text-center active-tab' :
                'py-2 text-center'}
                 onClick={event => {setPageToView('/settings');}}
                ><span className="text-light fa fa-cog"></span>
            </div>
          </Link>
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
