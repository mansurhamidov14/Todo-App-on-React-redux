import React, {Component} from 'react';
import { connect } from 'react-redux';
import { changeLanguage, setPassword, login } from '../actions';
import strings from '../translates/strings';
import md5 from '../hash';

const languages = ['az', 'en', 'ru'];
class Settings extends Component {
  constructor (props) {
    super(props);
    this.state = {
      success_status: '',
      success_message: ''
    }
  }
  changePassword () {
    if (this.password.value === this.r_password.value) {
      this.setState({
        success_status: 'success',
        success_message: strings[this.props.language]['password_added_success']
      });
      this.props.setPassword(md5(this.password.value));
      this.props.login(true);
      this.password.value = null;
      this.r_password.value = null;

    } else {
      this.setState({
        success_status: 'danger',
        success_message: strings[this.props.language]['password_added_fail']
      })
    }
  }
  unsetPassword () {
    this.setState({
      success_status: 'success',
      success_message: strings[this.props.language]['password_unset_success']
    });
    this.props.setPassword(null);
  }
  render () {
    let {language, changeLanguage, password} = this.props;
    return (
      <div className="container-fluid rendered-component bg-light">
        <div className="row">
          <div className="col-12 mt-3">
            <div className="list-group">
              <a
                className="list-group-item list-group-item-action active h5 text-light"
                onClick={event => {event.preventDefault()}}>
                <span className="fa fa-language mr-3"></span>
                <span>{strings[language]['language_selection']}</span>
              </a>
              {languages.map((lang, index) =>(
                <a
                  key={index}
                  className="list-group-item list-group-item-action"
                  onClick={event => {event.preventDefault(); changeLanguage(lang); }}><img className="img-reponsive mr-3" src={`icons/${lang}.png`} alt=""/>{strings[lang]['language']}
                  <span className={language === lang ? "language-checked fa fa-check-square text-primary" : ""}></span>
                  </a>
              ))}
            </div>
            <div className="list-group mt-5">
              <a
                className="list-group-item list-group-item-action active h5 text-light"
                onClick={event => {event.preventDefault()}}>
                <span className="fa fa-key mr-3"></span>
                <span>{password === null ? strings[language]['set_password'] : strings[language]['change_password']}</span>
              </a>
              <div className={`alert alert-${this.state.success_status} text-center mt-3`} id="addSuccess" role="alert">
                {this.state.success_message}
              </div>
              <div className="form-group mt-3">
                <div className="input-group">
                  <input
                      type="password"
                      className="form-control"
                      placeholder={strings[language]['new_password']}
                      ref={node => this.password = node}/>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <input
                      type="password"
                      className="form-control"

                      placeholder={strings[language]['repeat_password']}
                      ref={node => this.r_password = node}/>
                </div>
              </div>
              <button type="button" className="btn btn-success w-100" id="confirm" onClick={this.changePassword.bind(this)}>{password === null ? strings[language]['set_password'] : strings[language]['change_password']}</button>
              <button type="button" className="btn btn-danger w-100 mt-3 mb-3" id="unset" onClick={this.unsetPassword.bind(this)}>{strings[language]['unset_password']}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  language: state.language,
  password: state.password
});

const mapDispatchToProps = dispatch => ({
  changeLanguage: lang => dispatch(changeLanguage(lang)),
  setPassword: password => dispatch(setPassword(password)),
  login: is_logged_in => dispatch(login(is_logged_in))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
