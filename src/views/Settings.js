import React from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../actions';
import strings from '../translates/strings';

const languages = ['az', 'en', 'ru'];
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
          {languages.map(lang =>(
            <a href="#"
              className="list-group-item list-group-item-action"
              onClick={event => {event.preventDefault(); changeLanguage(lang); }}><img className="img-reponsive mr-3" src={`icons/${lang}.png`}/>{strings[lang]['language']}
              <span className={language === lang ? "language-checked fa fa-check-square text-primary" : ""}></span>
              </a>
          ))}
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
