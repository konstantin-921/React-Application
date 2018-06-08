import React from 'react';

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.update = this.update.bind(this);
    // this.clear = this.clear.bind(this);
  }

  update(event) {
    this.setState({ search: event.target.value.substr(0, 10) });
  }

  // clear(event) {
  //   this.state({search: event.target.value.});
  // }

  render() {
    return (
      <div>
        <input
          type="text"
          style={{ display: 'block', margin: 5 }}
          value={this.state.search}
          placeholder="Max 10 symbols"
          onChange={this.update}
          // blur={this.clear}
        />
        <div>{this.state.search}</div>
      </div>);
  }
}

export default MyInput;
