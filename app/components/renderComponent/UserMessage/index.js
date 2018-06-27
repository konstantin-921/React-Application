import React from 'react';
import style from './style';

class UserMessage extends React.PureComponent {
  render() {
    const text = this.props.data;
    const customStyle = this.props.flag ? style.container_unsuccessful : style.container_successful;
    return (
      <div style={customStyle}>{text}</div>
    );
  }
}

export default UserMessage;
