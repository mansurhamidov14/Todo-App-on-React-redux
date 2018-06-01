import React from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../actions';
import strings from '../translates/strings';

const Settings = ({language, changeLanguage}) => (
  <div className="container-fluid rendered-component bg-light">
    <div className="row">
      <div className="col-12 mt-3">
        <div className="list-group">
          <a href="#"
            className="list-group-item list-group-item-action active h5"
            onClick={event => {event.preventDefault()}}>
            <span className="fa fa-language mr-3"></span>
            <span>{strings[language]['language_selection']}</span>
          </a>
          <a href="#"
            className="list-group-item list-group-item-action"
            onClick={event => {event.preventDefault(); changeLanguage('az');}}>Azərbaycan dili
            <span className={language === 'az' ? "language-checked fa fa-check-square text-primary" : ""}></span>
            </a>
          <a href="#"
            className="list-group-item list-group-item-action"
            onClick={event => {event.preventDefault(); changeLanguage('en');}}>English
            <span className={language === 'en' ? "language-checked fa fa-check-square text-primary" : ""}></span>
            </a>
          <a href="#"
            className="list-group-item list-group-item-action"
            onClick={event => {event.preventDefault(); changeLanguage('ru');}}>Русский язык
            <span className={language === 'ru' ? "language-checked fa fa-check-square text-primary" : ""}></span>
            </a>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  language: state.language
});

const mapDispatchToProps = dispatch => ({
  changeLanguage: lang => dispatch(changeLanguage(lang))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
