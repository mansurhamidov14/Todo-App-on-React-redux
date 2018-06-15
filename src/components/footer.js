import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setPageToView } from '../actions';

const Pages = [
  {
    icon: 'list',
    route: '/weekdayslist'},
  {
    icon: 'calendar-plus-o',
    route: '/add_todo'},
  {
    icon: 'calendar',
    route: '/home'},
  {
    icon: 'cog',
    route: '/settings'},
  {
    icon: 'info-circle',
    route: '/about'},
];


const Footer = ({page, setPageToView}) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 bg-primary footer">
        <div className="row font-px-24">
          {Pages.map((pg, index) =>(
            <Link className="col none-decoration px-0" to={pg.route} key={index}>
              <div
                className={page === pg.route ?
                  'py-2 text-center active-tab' :
                  'py-2 text-center'}
                   onClick={event => {setPageToView(pg.route); return}}
                  ><span className={`text-light fa fa-${pg.icon}`}></span>
              </div>
            </Link>
          ))}
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
