import React from 'react';
import { connect } from 'react-redux'
import { setShownDate } from '../actions';
import strings from '../translates/strings';

const CurrentDate = ({currentDate, setShownDate, language}) => {
  let currentShownDate = new Date(currentDate);
  let year = currentShownDate.getFullYear();
  let month = strings[language]['months'][currentShownDate.getMonth()];
  let date = currentShownDate.getDate();
  let weekday = strings[language]['week_days'][currentShownDate.getDay()];
  return (
    <div className="row bg-light-grey mx-0">
      <div className="col-2 text-left font-px-24 mt-3">
        <a className="text-secondary fa fa-chevron-left none-decoration" onClick={event => {event.preventDefault(); setShownDate(parseInt(currentDate, 10) - 86400000)}}>&nbsp;</a>
      </div>
      <div className="col-8 text-center">
        <h5 className="mt-2 mb-0">{date} {month} {year}</h5>
        <p className="text-secondary font-px-18">{weekday}</p>
      </div>
      <div className="col-2 text-right font-px-24 mt-3">
        <a className="text-secondary fa fa-chevron-right none-decoration" onClick={event => {event.preventDefault(); setShownDate(parseInt(currentDate, 10) + 86400000)}}>&nbsp;</a>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  currentDate: state.currentDate,
  language: state.language
});

const mapDispatchToProps = dispatch => ({
  setShownDate: date => dispatch(setShownDate(date))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentDate);
