import React from 'react';
import style from './style';

class Post extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { content, date, title } = this.props.post;
    return (
      <li style={style.li}>
        <div style={style.header}>
          <div style={style.title}>{title}</div>
          <div style={style.date}>{date}</div>
        </div>
        <div>{content}</div>
      </li>
    );
  }
}

export default Post;
