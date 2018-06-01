import React from 'react';
import ListOfHeroes from '../ListOfHeroes/index';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: 'Добро пожаловать на сайт!',
      class: 'link off',
    };
    this.press = this.press.bind(this);
  }

  press(e) {
    console.log(e.target);
    const className = (this.state.class === 'link off') ? 'link on' : 'link off';
    this.setState({ class: className });
  }

  render() {
    const { color } = this.props;
    const linkStyle = { color };
    const text = (this.state.class === 'link off') ? this.state.welcome : 'И всего доброго!';
    const list = (this.state.class === 'link off') ? null : <ListOfHeroes />;
    return (
      <div>
        <a href="/#" onClick={this.press} className={this.state.class} style={linkStyle}>{ text }</a>
        {list}
      </div>
    );
  }
}

Hello.defaultProps = { color: 'red' };

export default Hello;
