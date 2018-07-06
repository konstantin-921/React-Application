import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logining } from '../../../redux/action';
import UserMessage from '../../../components/renderComponent/UserMessage';

const mapStateToProps = ({ reducer }) => ({
  reducer,
});
const mapDispatchToProps = dispatch => ({
  logining: (username, userpass) => dispatch(logining(username, userpass)),
});

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      redirectRegistration: false,
      userMessage: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.reducer.userMessageLogin !== this.props.reducer.userMessageLogin) {
      this.setState({ userMessage: nextProps.reducer.userMessageLogin });
    }
  }
  handleLogin(event) {
    this.setState({ login: event.target.value });
  }
  handlePassword(event) {
    this.setState({ password: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.logining(this.state.login, this.state.password);
  }
  handleClick(event) {
    event.preventDefault();
    this.setState({ redirectRegistration: true });
  }
  render() {
    const stateMessage = this.state.userMessage;
    const message = stateMessage ? <UserMessage data={stateMessage} flag /> : null;
    const mainPage = this.props.reducer.redirectLogin && localStorage['token.id'] && localStorage['token.id'] !== 'undefined' ? <Redirect to="/mainpage" /> : null;
    const formSignUp = this.state.redirectRegistration ? <Redirect to="/registration" /> : null;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="signIn-form">
          <input
            name="login"
            type="text"
            placeholder="login"
            value={this.state.login}
            onChange={this.handleLogin}
          />
          <input
            name="pass"
            type="text"
            placeholder="password"
            value={this.state.password}
            onChange={this.handlePassword}
          />
          <button>Sign in</button>
          <button onClick={this.handleClick}>Sign up</button>
        </form>
        {mainPage}
        {formSignUp}
        {message}
      </div>
    );
  }
}

FormLogin.propTypes = {
  logining: PropTypes.func.isRequired,
  reducer: PropTypes.shape({
    userMessageLogin: PropTypes.string.isRequired,
    redirectLogin: PropTypes.bool.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
