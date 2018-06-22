import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logining } from '../../../redux/action';
import FormRegistration from '../FormRegistration';

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
      visibleRegistration: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    this.setState({ visibleRegistration: !this.state.visibleRegistration });
  }
  render() {
    if (this.props.reducer.redirectLogin) {
      return <Redirect to="/mainpage" />;
    }
    const formSignUp = this.state.visibleRegistration ? <FormRegistration /> : null;
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
        {formSignUp}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
