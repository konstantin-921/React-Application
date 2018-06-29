import React from 'react';
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
      return <Post key={post.id} post={post} />;
    });
  }
  render() {
    const posts = this.renderPost();
    return <div>{posts}</div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPosts);
