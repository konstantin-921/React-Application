import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMyPost } from '../../../redux/action';
import Post from '../../renderComponent/Post';
import style from './style';

const mapStateToProps = ({ reducer }) => ({
  reducer,
});
const mapDispatchToProps = dispatch => ({
  getMyPost: () => dispatch(getMyPost()),
});

class MyPosts extends React.Component {
  constructor(props) {
    super(props);
    this.renderPost = this.renderPost.bind(this);
  }
  componentDidMount() {
    this.props.getMyPost();
  }
  renderPost() {
    return this.props.reducer.posts.map((post) => {
      return <Post key={post.id} post={post} />;
    });
  }
  render() {
    const posts = this.renderPost();
    return <ul style={style.ul}>{posts}</ul>;
  }
}

MyPosts.propTypes = {
  getMyPost: PropTypes.func.isRequired,
  reducer: PropTypes.shape({
    posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      user_id: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
