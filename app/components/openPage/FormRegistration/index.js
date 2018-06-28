import React from 'react';
import { connect } from 'react-redux';
import { registration, addUserMessageRegistration } from '../../../redux/action';
import UserMessage from '../../../components/renderComponent/UserMessage';

const mapStateToProps = ({ reducer }) => ({
  reducer,
});
const mapDispatchToProps = dispatch => ({
  registration: (username, userpass, useremail) =>
    dispatch(registration(username, userpass, useremail)),
  addUserMessageRegistration: data => dispatch(addUserMessageRegistration(data)),
});

class FormRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      email: '',
      userMessage: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.reducer.userMessageRegistration !== this.props.reducer.userMessageRegistration) {
      this.setState({ userMessage: nextProps.reducer.userMessageRegistration });
    }
  }
  handleLogin(event) {
    this.setState({ ...this.state, login: event.target.value });
  }
  handlePassword(event) {
    this.setState({ ...this.state, password: event.target.value });
  }
  handleEmail(event) {
    this.setState({ ...this.state, email: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.login !== '' && this.state.password !== '' && this.state.email !== '') {
      const username = this.state.login;
      const userpass = this.state.password;
      const useremail = this.state.email;
      this.props.registration(username, userpass, useremail);
    } else {
      const data = 'Все поля должны быть заполнены';
      this.props.addUserMessageRegistration(data);
    }
  }
  render() {
    const stateMessage = this.state.userMessage;
    const flag = (this.state.userMessage === 'Successful registration!') ? '' : true;
    const message = stateMessage ? <UserMessage data={stateMessage} flag={flag} /> : null;
    return (
      <div style={{ marginTop: 10 }}>
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
          <input
            name="email"
            type="text"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleEmail}
          />
          <button id="btn">Sign up</button>
        </form>
        {message}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRegistration);
