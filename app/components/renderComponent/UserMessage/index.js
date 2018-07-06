import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hideUserMessage } from '../../../redux/action';
import style from './style';

const mapStateToProps = ({ reducer }) => ({
  reducer,
});

const mapDispatchToProps = dispatch => ({
  hideUserMessage: () => dispatch(hideUserMessage()),
});

class UserMessage extends React.PureComponent {
  componentDidMount() {
    setTimeout(this.props.hideUserMessage, 3000);
  }
  render() {
    const text = this.props.data;
    const customStyle = this.props.flag ? style.container_unsuccessful : style.container_successful;
    return (
      <div style={customStyle}>{text}</div>
    );
  }
}

UserMessage.propTypes = {
  hideUserMessage: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,
  flag: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMessage);
