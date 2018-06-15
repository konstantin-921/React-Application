import { connect } from 'react-redux';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import ActiveHero from '../ActiveHero/index';
import { addHero } from '../../redux/action/index';
import ListOfHeroes from '../ListOfHeroes/index';

const mapStateToProps = ({ filter }) => ({
  filter,
});

const mapDispatchToProps = dispatch => ({
  addHero: array => dispatch(addHero(array)),
});

class ContainerHeroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: 'Welcome!',
      class: 'link off',
      loading: true,
    };
    this.press = this.press.bind(this);
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/people/')
      .then((response) => {
        this.setState({
          loading: false,
        });
        this.props.addHero(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  press() {
    const className = (this.state.class === 'link off') ? 'link on' : 'link off';
    this.setState({ class: className });
  }

  render() {
    const { color } = this.props;
    const linkStyle = { color };
    const text = (this.state.class === 'link off') ? this.state.welcome : 'Goodbye and good luck!';
    const list = (this.state.class === 'link off') ? null : (
      <main>
        {ReactDom.createPortal(
          <ListOfHeroes loading={this.state.loading} />,
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

export default connect(mapStateToProps, mapDispatchToProps)(ContainerHeroes);

