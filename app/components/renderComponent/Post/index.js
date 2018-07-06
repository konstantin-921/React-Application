import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

class Post extends React.PureComponent {
  render() {
    const {
      name,
      content,
      date,
      title,
    } = this.props.post;
    const userName = name !== undefined ? name : null;
    return (
      <li style={style.li}>
        <div style={style.header}>
          <div style={style.title}>{title}</div>
          <div style={style.date}>{date}</div>
          <div style={style.userName}>{userName}</div>
        </div>
        <div style={style.content}>{content}</div>
      </li>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Post;
