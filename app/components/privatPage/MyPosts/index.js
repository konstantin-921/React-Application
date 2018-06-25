import React from 'react';
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
    if (this.props.reducer.isFetching) {
      return this.props.reducer.posts.map((post) => {
        return <Post key={post.id} post={post} />;
      });
    }
    return null;
  }
  render() {
    const posts = this.renderPost();
    return <ul style={style.ul}>{posts}</ul>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
