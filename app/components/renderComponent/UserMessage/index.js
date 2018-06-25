import React from 'react';

class UserMessage extends React.PureComponent {
  render() {
    const text = this.props.data;
    return (
      <div>{text}</div>
    );
  }
}

export default UserMessage;
