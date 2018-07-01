import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import style from './style';
import FormLogin from '../../openPage/FormLogin';
import MyPosts from '../../privatPage/MyPosts';
import FriendsPosts from '../../privatPage/FriendsPosts';
import Modal from '../../renderComponent/Modal';
import SearchInput from '../SearchInput';

const mapStateToProps = ({ reducer }) => ({
  reducer,
});

class MainPage extends React.PureComponent {
  state = {
    show: false,
    redirectToReferrer: false,
  };
  openModal = () => {
    this.setState({ show: !this.state.show });
  }
  closeModal = () => {
    this.setState({ show: false });
  }
  logOut = () => {
    localStorage.clear();
    this.setState({ redirectToReferrer: true });
  }
  close
  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to="/login" />;
    }
    return (
      <React.Fragment>
        <div style={style.h1}>My App
        </div>
        <SearchInput />
        <div style={style.containerBlock}>
          <div style={style.blockLeft}>
            <button
              style={style.blockLeft.btn}
            >
              <Link
                style={style.linkButton}
                href="/mainpage/myposts"
                to="/mainpage/myposts"
              >
                My post
              </Link>
            </button>
            <button style={style.blockLeft.btn}>
              <Link
                style={style.linkButton}
                href="/mainpage/friendsposts"
                to="/mainpage/friendsposts"
              >
                Post friends
              </Link>
            </button>
            <button
              style={style.blockLeft.btn}
              onClick={this.openModal}
            >
              Add new post
            </button>
            <button
              style={{ ...style.blockLeft.btn, color: 'red' }}
              onClick={this.logOut}
            >
              Log Out
            </button>
          </div>
          <div style={style.blockRight}>
            <Route exact path="/" component={FormLogin} />
            <Route path="/mainpage/myposts" component={MyPosts} />
            <Route path="/mainpage/friendsposts" component={FriendsPosts} />
          </div>
        </div>
        <Modal show={this.state.show} onClose={this.closeModal} />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(MainPage);
