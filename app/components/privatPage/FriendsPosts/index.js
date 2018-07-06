import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFriendsPost } from '../../../redux/action';
import Post from '../../renderComponent/Post';

const mapStateToProps = ({ reducer }) => ({
  reducer,
});
const mapDispatchToProps = dispatch => ({
  getFriendsPost: () => dispatch(getFriendsPost()),
});

class FriendsPosts extends React.Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
  }
  componentDidMount() {
    this.props.getFriendsPost();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.reducer.followButton !== this.props.reducer.followButton) {
      this.props.getFriendsPost();
    }
  }
  renderPost() {
    return this.props.reducer.friendsPosts.map((post) => {
      const data = { name: post.name, ...post.message };
      return <Post key={data.id} post={data} />;
    });
  }
  render() {
    const posts = this.renderPost();
    return <div>{posts}</div>;
  }
}

FriendsPosts.propTypes = {
  getFriendsPost: PropTypes.func.isRequired,
  reducer: PropTypes.shape({
    followButton: PropTypes.bool.isRequired,
    friendsPosts: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      message: PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        user_id: PropTypes.number.isRequired,
      }).isRequired,
    })).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPosts);
