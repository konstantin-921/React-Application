import React from 'react';
import PropTypes from 'prop-types';
import style from './style';
import api from '../../../service/api';
import help from '../../../helpers/helperLogin';
import currentDate from '../../../helpers/newDate';

class Modal extends React.PureComponent {
  state = {
    title: '',
    content: '',
  }
  handleTitle = (event) => {
    this.setState({ ...this.state, title: event.target.value });
  }
  handleContent = (event) => {
    this.setState({ ...this.state, content: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      postTitle: this.state.title,
      postDate: currentDate(),
      postArea: this.state.content,
      id: localStorage['user.id'],
    };
    api.post('http://localhost:3000/posts', data)
      .then(help.checkStatus)
      .then(() => {
        this.props.onClose();
        this.setState({ ...this.state, title: '', content: '' });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div style={style.backdropStyle}>
        <div style={style.modalStyle}>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">
              Enter title:
              <input
                style={style.input}
                value={this.state.title}
                onChange={this.handleTitle}
                type="text"
                id="title"
              />
            </label>
            <label htmlFor="content">
              Enter content:
              <textarea
                style={style.input}
                value={this.state.content}
                onChange={this.handleContent}
                rows="7"
                cols="50"
                type="text"
                id="content"
              />
            </label>
            <button>Send</button>
          </form>
          <div style={style.footerStyle}>
            <button
              style={{ display: 'block', width: '100px' }}
              onClick={this.props.onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Modal;
