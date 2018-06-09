import React from 'react';

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      list: [],
    };
    this.update = this.update.bind(this);
    this.clear = this.clear.bind(this);
    this.addListItem = this.addListItem.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  update(event) {
    this.setState({ search: event.target.value.substr(0, 10) });
  }

  clear(event) {
    let clear = event.target.value;
    clear = '';
    this.setState({ search: clear });
  }

  addListItem() {
    if (this.state.search !== '' && this.state.list.includes(this.state.search) !== true) {
      const list = this.state.list.concat(this.state.search);
      this.setState({ list });
    } else {
      console.error('An array already contains this element');
    }
  }

  renderList() {
    return this.state.list.map((element) => {
      return (
        <div key={element}>
          {element}
        </div>
      );
    });
  }

  render() {
    const render = this.renderList();
    return (
      <div>
        <input
          type="text"
          style={{ margin: 5 }}
          value={this.state.search}
          placeholder="Max 10 symbols"
          onChange={this.update}
          onBlur={this.clear}
        />
        <button
          style={{ width: 60, height: 20 }}
          onMouseDown={this.addListItem}
        >
          Add
        </button>
        <div>{render}</div>
      </div>);
  }
}

export default MyInput;
