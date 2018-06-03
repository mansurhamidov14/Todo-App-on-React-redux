import React, { Component } from 'react';
import { connect } from 'react-redux';
import strings from '../translates/strings';
import { login } from '../actions';
import md5 from '../hash';

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      success_status: '',
      success_message: ''
    }
  }

  changePassword () {
    if (md5(this.password.value) === this.props.password) {
      this.setState({
        success_status: 'success',
        success_message: strings[this.props.language]['valid_password']
      });

      setTimeout(() => this.props.login(true), 1000)

    } else {
      this.setState({
        success_status: 'danger',
        success_message: strings[this.props.language]['invalid_password']
      })
    }
    this.password.value = null;
  }
  render () {
    let { language, password, is_logged_in } = this.props
    if (password !== null && !is_logged_in) {
      return (
        <div className="container-fluid rendered-component bg-light login-page">
          <div className="row">
            <div className="col-12 mt-3">
              <p className="font-px-24"><span className="badge badge-danger login-alert px-3 py-4 text-light w-100"><i className="fa fa-lock font-px-24">&nbsp;</i><br/>{strings[language]['login_blocked']}</span></p>
              <div className={`alert alert-${this.state.success_status} text-center mt-3`} id="addSuccess" role="alert">
                {this.state.success_message}
              </div>
              <div className="form-group mt-3">
                <div className="input-group">
                  <input
                      type="password"
                      className="form-control"
                      placeholder={strings[language]['your_password']}
                      ref={node => this.password = node}/>
                </div>
              </div>
              <button type="button" className="btn btn-success w-100" id="confirm" onClick={this.changePassword.bind(this)}>{strings[language]['login']}</button>
            </div>
          </div>
        </div>
      )
    } else {
      return (<span>{password}</span>);
    }

  }
}

const mapStateToProps = state => ({
  language: state.language,
  password: state.password,
  is_logged_in: state.is_logged_in
});

const mapDispatchToProps = dispatch => ({
  login: is_logged_in => dispatch(login(is_logged_in))
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Login);
