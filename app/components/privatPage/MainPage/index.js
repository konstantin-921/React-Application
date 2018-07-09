import React from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import style from './style';
import MyPosts from '../../privatPage/MyPosts';
import FriendsPosts from '../../privatPage/FriendsPosts';
import Modal from '../../renderComponent/Modal';
import SearchInput from '../SearchInput';

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
                href="/my-posts"
                to="/my-posts"
              >
                My post
              </Link>
            </button>
            <button style={style.blockLeft.btn}>
              <Link
                style={style.linkButton}
                href="/friends/posts"
                to="/friends/posts"
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
            <Switch>
              <Route path="/my-posts" component={MyPosts} />
              <Route path="/friends/posts" component={FriendsPosts} />
            </Switch>
          </div>
        </div>
        <Modal show={this.state.show} onClose={this.closeModal} />
      </React.Fragment>
    );
  }
}

export default MainPage;
