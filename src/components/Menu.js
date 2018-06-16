import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import strings from '../translates/strings';
import {setPageToView} from '../actions'

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
    icon: 'cart-plus',
    route: '/add_expense'},
  {
    icon: 'cog',
    route: '/settings'},
  {
    icon: 'info-circle',
    route: '/about'}
];


const Menu = ({language, page, setPageToView}) => (
  <div className="slide-menu" id="my-menu">
    <ul className="list-group list-group-flush">
      {Pages.map((pg, i) => <Link key={i} to={pg.route} className={`list-group-item list-group-item-action list-group-item-custom font-px-18 page-link ${pg.route === page ? 'active' : ''}`} onClick={() => setPageToView(pg.route)}><i className={`fa fa-${pg.icon}`}></i>&nbsp;{strings[language][pg.route.slice(1)]}</Link>)}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  language: state.language
});

const mapDispatchToProps = dispatch => ({
  setPageToView: page => dispatch(setPageToView(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
