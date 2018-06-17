import { connect } from 'react-redux';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ActiveHero from '../ActiveHero/index';
import { getHeroes, request, clearHeroes } from '../../redux/action/index';
import ListOfHeroes from '../ListOfHeroes/index';

const mapStateToProps = ({ filter }) => ({
  filter,
});

class ContainerHeroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: 'Welcome!',
      class: 'link off',
    };
    this.press = this.press.bind(this);
  }


  press() {
    const className = (this.state.class === 'link off') ? 'link on' : 'link off';
    const { dispatch } = this.props;
    dispatch(clearHeroes());
    dispatch(request());
    dispatch(getHeroes());
    this.setState({ class: className });
  }

  render() {
    const { color } = this.props;
    const linkStyle = { color };
    const text = (this.state.class === 'link off') ? this.state.welcome : 'Goodbye and good luck!';
    const list = (this.state.class === 'link off') ? null : (
      <main>
        {ReactDom.createPortal(
          <ListOfHeroes loading={this.props.filter.loading} />,
          document.getElementById('portal'),
        )}
      </main>);
    return (
      <div style={{ overflow: 'hidden', height: 200 }}>
        <a href="/#" onClick={this.press} className={this.state.class} style={linkStyle}>{text}</a>
        <ActiveHero />
        {list}
        <p>Hidden zone</p>
      </div>
    );
  }
}

ContainerHeroes.defaultProps = { color: 'red' };

export default connect(mapStateToProps)(ContainerHeroes);

