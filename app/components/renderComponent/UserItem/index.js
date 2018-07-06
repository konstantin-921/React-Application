import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFollowing } from '../../../redux/action';
import style from './style';
import help from '../../../helpers/helperLogin';
import api from '../../../service/api';

const mapStateToProps = ({ reducer }) => ({
  reducer,
});
const mapDispatchToProps = dispatch => ({
  changeFollowing: () => dispatch(changeFollowing()),
});

class UserItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      followButton: false,
    };
  }
  componentDidMount() {
    const data = {
      id: Number(this.props.id),
      userId: Number(localStorage['user.id']),
    };

    const url = new URL('http://localhost:3000/followers/teststate');

    api.get(url)
      .then(help.checkStatus)
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].follower === data.userId && response.data[i].following === data.id) {
            this.setState({ followButton: true });
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  toggleFollowing = () => {
    const data = {
      id: Number(this.props.id),
      userId: Number(localStorage['user.id']),
    };

    if (!this.state.followButton) {
      api.post('http://localhost:3000/followers', data)
        .then(help.checkStatus)
        .then(() => {
          this.props.changeFollowing();
          this.setState({ followButton: true });
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (this.state.followButton) {
      api.delete('http://localhost:3000/followers', data)
        .then(help.checkStatus)
        .then(() => {
          this.props.changeFollowing();
          this.setState({ followButton: false });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  render() {
    const stateButton = this.state.followButton ? { ...style.followButton, backgroundColor: 'red' } : { ...style.followButton, backgroundColor: '#fff' };
    const textButton = this.state.followButton ? 'Unfollow' : 'Follow';
    return (
      <div style={style.userItem}>
        <span>{this.props.name}</span>
        <button
          style={stateButton}
          onClick={this.toggleFollowing}
        >{textButton}
        </button>
      </div>
    );
  }
}

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  changeFollowing: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserItem);
