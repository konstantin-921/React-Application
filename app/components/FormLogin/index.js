import React from 'react';
import { connect } from 'react-redux';
import { enterLogin, enterPassword, logining } from '../../redux/action/index';
// import apiAxios from '../../helpers/apiAxios';

const mapStateToProps = ({ reducer }) => ({
  reducer,
});
const mapDispatchToProps = dispatch => ({
  enterLogin: data => dispatch(enterLogin(data)),
  enterPassword: data => dispatch(enterPassword(data)),
  logining: (username, userpass) => dispatch(logining(username, userpass)),
});

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(event) {
    this.props.enterLogin(event.target.value);
  }
  handlePassword(event) {
    this.props.enterPassword(event.target.value);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.logining(this.props.reducer.login, this.props.reducer.password);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="signIn-form">
          <input
            name="login"
            type="text"
            placeholder="login"
            value={this.props.login}
            onChange={this.handleLogin}
          />
          <input
            name="pass"
            type="text"
            placeholder="password"
            value={this.props.password}
            onChange={this.handlePassword}
          />
          <button id="btn">Sign in</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
