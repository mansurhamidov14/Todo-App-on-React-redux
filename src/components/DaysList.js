import React from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { setPageToView, setShownDate } from '../actions';
import strings from '../translates/strings';

const currentDay = new Date().getDay();
const DaysList = ({currentDate, setPageToView, setShownDate, language}) => (
  <div className="col-12 mt-3">
    <div className="list-group" id="list-tab" role="tablist">
      {[0, 1, 2, 3, 4, 5, 6].map(i =>
        <Link key={i}
          className={i === currentDay ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
          to="/home"
          onClick={() => {setPageToView('/home');setShownDate(i)}}>
          {strings[language]['week_days'][i]}
        </Link>)}
    </div>
  </div>
);

const mapStateToProps = state => ({
  language: state.language,
  currentDate: state.currentDate
});

const mapDispatchToProps = dispatch => ({
  setPageToView: page => dispatch(setPageToView(page)),
  setShownDate: date => dispatch(setShownDate(date))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DaysList);
