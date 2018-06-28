import React from 'react';
import style from './style';

class UserItem extends React.PureComponent {
  render() {
    return (
      <div style={style.userItem}>{this.props.name}</div>
    );
  }
}

export default UserItem;
