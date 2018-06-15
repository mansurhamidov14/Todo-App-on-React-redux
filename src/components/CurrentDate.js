import React from 'react';
import { connect } from 'react-redux'
import { setShownDate } from '../actions';
import strings from '../translates/strings';

const CurrentDate = ({currentDate, setShownDate, language}) => {
  return (
    <div className="row bg-light-grey mx-0">
      <div className="col-2 text-left font-px-24 mt-2">
        <a className="text-secondary fa fa-chevron-left none-decoration" onClick={event => {event.preventDefault(); setShownDate(currentDate === 0 ? 6 : currentDate - 1)}}>&nbsp;</a>
      </div>
      <div className="col-8 text-center">
        <h5 className="mt-3">{strings[language]['week_days'][currentDate]}</h5>
      </div>
      <div className="col-2 text-right font-px-24 mt-2">
        <a className="text-secondary fa fa-chevron-right none-decoration" onClick={event => {event.preventDefault(); setShownDate(currentDate === 6 ? 0 : currentDate + 1)}}>&nbsp;</a>
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
